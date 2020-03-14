use crate::app::App;
use crate::colors;
use crate::common::{ColorLegend, Colorer, ShowBusRoute, Warping};
use crate::game::Transition;
use crate::helpers::rotating_color_map;
use crate::helpers::ID;
use crate::managed::{ManagedGUIState, WrappedComposite, WrappedOutcome};
use abstutil::{prettyprint_usize, Counter};
use ezgui::{
    hotkey, Button, Color, Composite, Drawable, EventCtx, GeomBatch, GfxCtx, Histogram,
    HorizontalAlignment, JustDraw, Key, Line, ManagedWidget, Outcome, Plot, PlotOptions,
    RewriteColor, Series, Text, TextExt, VerticalAlignment,
};
use geom::{Circle, Distance, Duration, PolyLine, Polygon, Pt2D, Statistic, Time};
use map_model::{BusRouteID, IntersectionID};
use sim::ParkingSpot;
use std::collections::HashSet;

pub enum Overlays {
    Inactive,
    ParkingAvailability(Time, Colorer),
    IntersectionDelay(Time, Colorer),
    TrafficJams(Time, Colorer),
    CumulativeThroughput(Time, Colorer),
    BikeNetwork(Colorer),
    BusNetwork(Colorer),
    Elevation(Colorer),
    Edits(Colorer),
    TripsHistogram(Time, Composite),

    // These aren't selectable from the main picker
    IntersectionDemand(Time, IntersectionID, Drawable, Composite),
    BusRoute(Time, BusRouteID, ShowBusRoute),
    BusDelaysOverTime(Time, BusRouteID, Composite),
    BusPassengers(Time, BusRouteID, WrappedComposite),
}

impl Overlays {
    // Since Overlays is embedded in UI, we have to do this slight trick
    pub fn update(ctx: &mut EventCtx, app: &mut App, minimap: &Composite) -> Option<Transition> {
        let now = app.primary.sim.time();
        match app.overlay {
            Overlays::ParkingAvailability(t, _) => {
                if now != t {
                    app.overlay = Overlays::parking_availability(ctx, app);
                }
            }
            Overlays::IntersectionDelay(t, _) => {
                if now != t {
                    app.overlay = Overlays::intersection_delay(ctx, app);
                }
            }
            Overlays::TrafficJams(t, _) => {
                if now != t {
                    app.overlay = Overlays::traffic_jams(ctx, app);
                }
            }
            Overlays::CumulativeThroughput(t, _) => {
                if now != t {
                    app.overlay = Overlays::cumulative_throughput(ctx, app);
                }
            }
            Overlays::IntersectionDemand(t, i, _, _) => {
                if now != t {
                    app.overlay = Overlays::intersection_demand(i, ctx, app);
                }
            }
            Overlays::TripsHistogram(t, _) => {
                if now != t {
                    app.overlay = Overlays::trips_histogram(ctx, app);
                }
            }
            Overlays::BusRoute(t, id, _) => {
                if now != t {
                    app.overlay = Overlays::show_bus_route(id, ctx, app);
                }
            }
            Overlays::BusDelaysOverTime(t, id, _) => {
                if now != t {
                    app.overlay = Overlays::delays_over_time(id, ctx, app);
                }
            }
            Overlays::BusPassengers(t, id, _) => {
                if now != t {
                    app.overlay = Overlays::bus_passengers(id, ctx, app);
                }
            }
            // No updates needed
            Overlays::Inactive
            | Overlays::BikeNetwork(_)
            | Overlays::BusNetwork(_)
            | Overlays::Elevation(_)
            | Overlays::Edits(_) => {}
        };

        // Because BusPassengers has the callbacks that need UI, but UI also stores Overlays, we
        // have to play this trick.
        let mut orig_overlay = std::mem::replace(&mut app.overlay, Overlays::Inactive);

        match orig_overlay {
            Overlays::ParkingAvailability(_, ref mut heatmap)
            | Overlays::BikeNetwork(ref mut heatmap)
            | Overlays::BusNetwork(ref mut heatmap)
            | Overlays::Elevation(ref mut heatmap)
            | Overlays::IntersectionDelay(_, ref mut heatmap)
            | Overlays::TrafficJams(_, ref mut heatmap)
            | Overlays::CumulativeThroughput(_, ref mut heatmap)
            | Overlays::Edits(ref mut heatmap) => {
                heatmap.legend.align_above(ctx, minimap);
                if heatmap.event(ctx) {
                    app.overlay = Overlays::Inactive;
                } else {
                    app.overlay = orig_overlay;
                }
            }
            Overlays::BusRoute(_, _, ref mut c) => {
                c.colorer.legend.align_above(ctx, minimap);
                if c.colorer.event(ctx) {
                    app.overlay = Overlays::Inactive;
                } else {
                    app.overlay = orig_overlay;
                }
            }
            Overlays::BusPassengers(_, _, ref mut c) => {
                c.inner.align_above(ctx, minimap);
                match c.event(ctx, app) {
                    Some(WrappedOutcome::Transition(t)) => {
                        app.overlay = orig_overlay;
                        return Some(t);
                    }
                    Some(WrappedOutcome::Clicked(x)) => match x.as_ref() {
                        "X" => {
                            app.overlay = Overlays::Inactive;
                        }
                        _ => unreachable!(),
                    },
                    None => {
                        app.overlay = orig_overlay;
                    }
                }
            }
            Overlays::IntersectionDemand(_, i, _, ref mut c) => {
                c.align_above(ctx, minimap);
                match c.event(ctx) {
                    Some(Outcome::Clicked(x)) => match x.as_ref() {
                        "intersection demand" => {
                            let id = ID::Intersection(i);
                            app.overlay = orig_overlay;
                            return Some(Transition::Push(Warping::new(
                                ctx,
                                id.canonical_point(&app.primary).unwrap(),
                                Some(10.0),
                                Some(id.clone()),
                                &mut app.primary,
                            )));
                        }
                        "X" => {
                            app.overlay = Overlays::Inactive;
                        }
                        _ => unreachable!(),
                    },
                    None => {
                        app.overlay = orig_overlay;
                    }
                }
            }
            Overlays::TripsHistogram(_, ref mut c)
            | Overlays::BusDelaysOverTime(_, _, ref mut c) => {
                c.align_above(ctx, minimap);
                match c.event(ctx) {
                    Some(Outcome::Clicked(x)) => match x.as_ref() {
                        "X" => {
                            app.overlay = Overlays::Inactive;
                        }
                        _ => unreachable!(),
                    },
                    None => {
                        app.overlay = orig_overlay;
                    }
                }
            }
            Overlays::Inactive => {}
        }

        None
    }

    pub fn draw(&self, g: &mut GfxCtx) {
        match self {
            Overlays::Inactive => {}
            Overlays::ParkingAvailability(_, ref heatmap)
            | Overlays::BikeNetwork(ref heatmap)
            | Overlays::BusNetwork(ref heatmap)
            | Overlays::Elevation(ref heatmap)
            | Overlays::IntersectionDelay(_, ref heatmap)
            | Overlays::TrafficJams(_, ref heatmap)
            | Overlays::CumulativeThroughput(_, ref heatmap)
            | Overlays::Edits(ref heatmap) => {
                heatmap.draw(g);
            }
            Overlays::TripsHistogram(_, ref composite)
            | Overlays::BusDelaysOverTime(_, _, ref composite) => {
                composite.draw(g);
            }
            Overlays::BusPassengers(_, _, ref composite) => {
                composite.draw(g);
            }
            Overlays::IntersectionDemand(_, _, ref draw, ref legend) => {
                g.redraw(draw);
                legend.draw(g);
            }
            Overlays::BusRoute(_, _, ref s) => {
                s.draw(g);
            }
        }
    }

    pub fn maybe_colorer(&self) -> Option<&Colorer> {
        match self {
            Overlays::ParkingAvailability(_, ref heatmap)
            | Overlays::BikeNetwork(ref heatmap)
            | Overlays::BusNetwork(ref heatmap)
            | Overlays::Elevation(ref heatmap)
            | Overlays::IntersectionDelay(_, ref heatmap)
            | Overlays::TrafficJams(_, ref heatmap)
            | Overlays::CumulativeThroughput(_, ref heatmap)
            | Overlays::Edits(ref heatmap) => Some(heatmap),
            Overlays::BusRoute(_, _, ref s) => Some(&s.colorer),
            _ => None,
        }
    }

    pub fn change_overlays(ctx: &mut EventCtx, app: &App) -> Option<Transition> {
        let mut choices = vec![
            WrappedComposite::text_button(ctx, "None", hotkey(Key::N)),
            WrappedComposite::text_button(ctx, "map edits", hotkey(Key::E)),
            WrappedComposite::text_button(ctx, "worst traffic jams", hotkey(Key::G)),
            WrappedComposite::text_button(ctx, "elevation", hotkey(Key::S)),
            ManagedWidget::btn(Button::rectangle_svg(
                "../data/system/assets/layers/parking_avail.svg",
                "parking availability",
                hotkey(Key::P),
                RewriteColor::Change(Color::hex("#F2F2F2"), colors::HOVERING),
                ctx,
            )),
            ManagedWidget::btn(Button::rectangle_svg(
                "../data/system/assets/layers/intersection_delay.svg",
                "intersection delay",
                hotkey(Key::I),
                RewriteColor::Change(Color::hex("#F2F2F2"), colors::HOVERING),
                ctx,
            )),
            ManagedWidget::btn(Button::rectangle_svg(
                "../data/system/assets/layers/throughput.svg",
                "throughput",
                hotkey(Key::T),
                RewriteColor::Change(Color::hex("#F2F2F2"), colors::HOVERING),
                ctx,
            )),
            ManagedWidget::btn(Button::rectangle_svg(
                "../data/system/assets/layers/bike_network.svg",
                "bike network",
                hotkey(Key::B),
                RewriteColor::Change(Color::hex("#F2F2F2"), colors::HOVERING),
                ctx,
            )),
            ManagedWidget::btn(Button::rectangle_svg(
                "../data/system/assets/layers/bus_network.svg",
                "bus network",
                hotkey(Key::U),
                RewriteColor::Change(Color::hex("#F2F2F2"), colors::HOVERING),
                ctx,
            )),
        ];
        // TODO Grey out the inactive SVGs, and add the green checkmark
        if let Some((find, replace)) = match app.overlay {
            Overlays::Inactive => Some(("None", Button::inactive_button(ctx, "None"))),
            Overlays::ParkingAvailability(_, _) => Some((
                "parking availability",
                ManagedWidget::draw_svg(ctx, "../data/system/assets/layers/parking_avail.svg"),
            )),
            Overlays::IntersectionDelay(_, _) => Some((
                "intersection delay",
                ManagedWidget::draw_svg(ctx, "../data/system/assets/layers/intersection_delay.svg"),
            )),
            Overlays::TrafficJams(_, _) => Some((
                "worst traffic jams",
                Button::inactive_button(ctx, "worst traffic jams"),
            )),
            Overlays::CumulativeThroughput(_, _) => Some((
                "throughput",
                ManagedWidget::draw_svg(ctx, "../data/system/assets/layers/throughput.svg"),
            )),
            Overlays::BikeNetwork(_) => Some((
                "bike network",
                ManagedWidget::draw_svg(ctx, "../data/system/assets/layers/bike_network.svg"),
            )),
            Overlays::BusNetwork(_) => Some((
                "bus network",
                ManagedWidget::draw_svg(ctx, "../data/system/assets/layers/bus_network.svg"),
            )),
            Overlays::Elevation(_) => {
                Some(("elevation", Button::inactive_button(ctx, "elevation")))
            }
            Overlays::Edits(_) => Some(("map edits", Button::inactive_button(ctx, "map edits"))),
            _ => None,
        } {
            for btn in &mut choices {
                if btn.is_btn(&find) {
                    *btn = replace.outline(2.0, Color::GREEN);
                    break;
                }
            }
        }

        let c = WrappedComposite::new(
            Composite::new(
                ManagedWidget::col(vec![
                    ManagedWidget::row(vec![
                        "Heat Map Layers".draw_text(ctx),
                        WrappedComposite::text_button(ctx, "X", hotkey(Key::Escape)).align_right(),
                    ]),
                    ManagedWidget::row(choices).flex_wrap(ctx, 20),
                ])
                .bg(colors::PANEL_BG)
                .outline(10.0, Color::WHITE)
                .padding(10),
            )
            .max_size_percent(30, 50)
            .build(ctx),
        )
        .cb("X", Box::new(|_, _| Some(Transition::Pop)))
        .maybe_cb(
            "None",
            Box::new(|_, app| {
                app.overlay = Overlays::Inactive;
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "parking availability",
            Box::new(|ctx, app| {
                app.overlay = Overlays::parking_availability(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "intersection delay",
            Box::new(|ctx, app| {
                app.overlay = Overlays::intersection_delay(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "worst traffic jams",
            Box::new(|ctx, app| {
                app.overlay = Overlays::traffic_jams(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "throughput",
            Box::new(|ctx, app| {
                app.overlay = Overlays::cumulative_throughput(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "bike network",
            Box::new(|ctx, app| {
                app.overlay = Overlays::bike_network(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "bus network",
            Box::new(|ctx, app| {
                app.overlay = Overlays::bus_network(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "elevation",
            Box::new(|ctx, app| {
                app.overlay = Overlays::elevation(ctx, app);
                Some(Transition::Pop)
            }),
        )
        .maybe_cb(
            "map edits",
            Box::new(|ctx, app| {
                app.overlay = Overlays::map_edits(ctx, app);
                Some(Transition::Pop)
            }),
        );
        Some(Transition::Push(ManagedGUIState::over_map(c)))
    }
}

impl Overlays {
    fn parking_availability(ctx: &mut EventCtx, app: &App) -> Overlays {
        let (filled_spots, avail_spots) = app.primary.sim.get_all_parking_spots();
        let mut txt = Text::from(Line("parking availability"));
        txt.add(Line(format!(
            "{} spots filled",
            prettyprint_usize(filled_spots.len())
        )));
        txt.add(Line(format!(
            "{} spots available ",
            prettyprint_usize(avail_spots.len())
        )));

        let awful = Color::hex("#801F1C");
        let bad = Color::hex("#EB5757");
        let meh = Color::hex("#F2C94C");
        let good = Color::hex("#7FFA4D");
        let mut colorer = Colorer::new(
            txt,
            vec![
                ("< 10%", awful),
                ("< 30%", bad),
                ("< 60%", meh),
                (">= 60%", good),
            ],
        );

        let lane = |spot| match spot {
            ParkingSpot::Onstreet(l, _) => l,
            ParkingSpot::Offstreet(b, _) => app
                .primary
                .map
                .get_b(b)
                .parking
                .as_ref()
                .unwrap()
                .driving_pos
                .lane(),
        };

        let mut filled = Counter::new();
        let mut avail = Counter::new();
        let mut keys = HashSet::new();
        for spot in filled_spots {
            let l = lane(spot);
            keys.insert(l);
            filled.inc(l);
        }
        for spot in avail_spots {
            let l = lane(spot);
            keys.insert(l);
            avail.inc(l);
        }

        for l in keys {
            let open = avail.get(l);
            let closed = filled.get(l);
            let percent = (open as f64) / ((open + closed) as f64);
            let color = if percent >= 0.6 {
                good
            } else if percent > 0.3 {
                meh
            } else if percent > 0.1 {
                bad
            } else {
                awful
            };
            colorer.add_l(l, color, &app.primary.map);
        }

        Overlays::ParkingAvailability(app.primary.sim.time(), colorer.build(ctx, app))
    }

    pub fn intersection_delay(ctx: &mut EventCtx, app: &App) -> Overlays {
        let fast = Color::hex("#7FFA4D");
        let meh = Color::hex("#F4DA22");
        let slow = Color::hex("#EB5757");
        let mut colorer = Colorer::new(
            Text::from(Line(
                "intersection delay for traffic signals in the last 2 hours (90%ile)",
            )),
            vec![("< 10s", fast), ("<= 60s", meh), ("> 60s", slow)],
        );

        for i in app.primary.map.all_intersections() {
            let delays = app.primary.sim.get_analytics().intersection_delays(
                i.id,
                app.primary.sim.time().clamped_sub(Duration::hours(2)),
                app.primary.sim.time(),
            );
            if let Some(d) = delays.percentile(90.0) {
                let color = if d < Duration::seconds(10.0) {
                    fast
                } else if d <= Duration::seconds(60.0) {
                    meh
                } else {
                    slow
                };
                colorer.add_i(i.id, color);
            }
        }

        Overlays::IntersectionDelay(app.primary.sim.time(), colorer.build(ctx, app))
    }

    pub fn traffic_jams(ctx: &mut EventCtx, app: &App) -> Overlays {
        let jams = app.primary.sim.delayed_intersections(Duration::minutes(5));

        // TODO Silly colors
        let others = Color::hex("#7FFA4D");
        let early = Color::hex("#F4DA22");
        let earliest = Color::hex("#EB5757");
        let mut colorer = Colorer::new(
            Text::from(Line(format!("{} traffic jams", jams.len()))),
            vec![
                ("longest lasting", earliest),
                ("recent problems", early),
                ("others", others),
            ],
        );

        for (idx, (i, _)) in jams.into_iter().enumerate() {
            if idx == 0 {
                colorer.add_i(i, earliest);
            } else if idx <= 5 {
                colorer.add_i(i, early);
            } else {
                colorer.add_i(i, others);
            }
        }

        Overlays::TrafficJams(app.primary.sim.time(), colorer.build(ctx, app))
    }

    fn cumulative_throughput(ctx: &mut EventCtx, app: &App) -> Overlays {
        let light = Color::hex("#7FFA4D");
        let medium = Color::hex("#F4DA22");
        let heavy = Color::hex("#EB5757");
        let mut colorer = Colorer::new(
            Text::from(Line("Throughput")),
            vec![
                ("< 50%ile", light),
                ("< 90%ile", medium),
                (">= 90%ile", heavy),
            ],
        );

        let stats = &app.primary.sim.get_analytics().thruput_stats;

        // TODO If there are many duplicate counts, arbitrarily some will look heavier! Find the
        // disribution of counts instead.
        // TODO Actually display the counts at these percentiles
        // TODO Dump the data in debug mode
        {
            let roads = stats.count_per_road.sorted_asc();
            let p50_idx = ((roads.len() as f64) * 0.5) as usize;
            let p90_idx = ((roads.len() as f64) * 0.9) as usize;
            for (idx, r) in roads.into_iter().enumerate() {
                let color = if idx < p50_idx {
                    light
                } else if idx < p90_idx {
                    medium
                } else {
                    heavy
                };
                colorer.add_r(*r, color, &app.primary.map);
            }
        }
        // TODO dedupe
        {
            let intersections = stats.count_per_intersection.sorted_asc();
            let p50_idx = ((intersections.len() as f64) * 0.5) as usize;
            let p90_idx = ((intersections.len() as f64) * 0.9) as usize;
            for (idx, i) in intersections.into_iter().enumerate() {
                let color = if idx < p50_idx {
                    light
                } else if idx < p90_idx {
                    medium
                } else {
                    heavy
                };
                colorer.add_i(*i, color);
            }
        }

        Overlays::CumulativeThroughput(app.primary.sim.time(), colorer.build(ctx, app))
    }

    fn bike_network(ctx: &mut EventCtx, app: &App) -> Overlays {
        let color = Color::hex("#7FFA4D");
        let mut colorer = Colorer::new(
            Text::from(Line("bike networks")),
            vec![("bike lanes", color)],
        );
        for l in app.primary.map.all_lanes() {
            if l.is_biking() {
                colorer.add_l(l.id, color, &app.primary.map);
            }
        }
        Overlays::BikeNetwork(colorer.build(ctx, app))
    }

    fn bus_network(ctx: &mut EventCtx, app: &App) -> Overlays {
        let lane = Color::hex("#4CA7E9");
        let stop = Color::hex("#4CA7E9");
        let mut colorer = Colorer::new(
            Text::from(Line("bus networks")),
            vec![("bus lanes", lane), ("bus stops", stop)],
        );
        for l in app.primary.map.all_lanes() {
            if l.is_bus() {
                colorer.add_l(l.id, lane, &app.primary.map);
            }
        }
        for bs in app.primary.map.all_bus_stops().keys() {
            colorer.add_bs(*bs, stop);
        }

        Overlays::BusNetwork(colorer.build(ctx, app))
    }

    fn elevation(ctx: &mut EventCtx, app: &App) -> Overlays {
        let awful = Color::hex("#801F1C");
        let bad = Color::hex("#EB5757");
        let meh = Color::hex("#F2C94C");
        let good = Color::hex("#7FFA4D");
        let mut colorer = Colorer::new(
            Text::from(Line("elevation change")),
            vec![
                (">= 15% (steep)", awful),
                ("< 15%", bad),
                ("< 5%", meh),
                ("< 1% (flat)", good),
            ],
        );

        for l in app.primary.map.all_lanes() {
            let pct = l.percent_grade(&app.primary.map).abs();

            let color = if pct < 0.01 {
                good
            } else if pct < 0.05 {
                meh
            } else if pct < 0.15 {
                bad
            } else {
                awful
            };
            colorer.add_l(l.id, color, &app.primary.map);
        }

        Overlays::Elevation(colorer.build(ctx, app))
    }

    pub fn trips_histogram(ctx: &mut EventCtx, app: &App) -> Overlays {
        if app.has_prebaked().is_none() {
            return Overlays::Inactive;
        }

        let now = app.primary.sim.time();
        Overlays::TripsHistogram(
            now,
            Composite::new(
                ManagedWidget::col(vec![
                    ManagedWidget::row(vec![
                        {
                            let mut txt = Text::from(Line("Are trips "));
                            txt.append(Line("faster").fg(Color::GREEN));
                            txt.append(Line(", "));
                            txt.append(Line("slower").fg(Color::RED));
                            txt.append(Line(", or "));
                            txt.append(Line("the same").fg(Color::YELLOW));
                            txt.append(Line("?"));
                            txt.draw(ctx)
                        }
                        .margin(10),
                        WrappedComposite::text_button(ctx, "X", None).align_right(),
                    ]),
                    Histogram::new(
                        app.primary
                            .sim
                            .get_analytics()
                            .trip_time_deltas(now, app.prebaked()),
                        ctx,
                    ),
                ])
                .bg(colors::PANEL_BG),
            )
            .aligned(HorizontalAlignment::Right, VerticalAlignment::Center)
            .build(ctx),
        )
    }

    pub fn intersection_demand(i: IntersectionID, ctx: &mut EventCtx, app: &App) -> Overlays {
        let mut batch = GeomBatch::new();

        let mut total_demand = 0;
        let mut demand_per_group: Vec<(&PolyLine, usize)> = Vec::new();
        for g in app.primary.map.get_traffic_signal(i).turn_groups.values() {
            let demand = app
                .primary
                .sim
                .get_analytics()
                .thruput_stats
                .demand
                .get(&g.id)
                .cloned()
                .unwrap_or(0);
            if demand > 0 {
                total_demand += demand;
                demand_per_group.push((&g.geom, demand));
            }
        }

        for (pl, demand) in demand_per_group {
            let percent = (demand as f64) / (total_demand as f64);
            batch.push(
                Color::RED,
                pl.make_arrow(percent * Distance::meters(5.0)).unwrap(),
            );
        }

        let col = vec![
            ManagedWidget::row(vec![
                "intersection demand".draw_text(ctx),
                ManagedWidget::btn(Button::rectangle_svg(
                    "../data/system/assets/tools/locate.svg",
                    "intersection demand",
                    None,
                    RewriteColor::Change(Color::hex("#CC4121"), colors::HOVERING),
                    ctx,
                )),
                WrappedComposite::text_button(ctx, "X", None).align_right(),
            ]),
            ColorLegend::row(ctx, Color::RED, "current demand"),
        ];

        Overlays::IntersectionDemand(
            app.primary.sim.time(),
            i,
            batch.upload(ctx),
            Composite::new(ManagedWidget::col(col).bg(colors::PANEL_BG))
                .aligned(HorizontalAlignment::Right, VerticalAlignment::Center)
                .build(ctx),
        )
    }

    pub fn show_bus_route(id: BusRouteID, ctx: &mut EventCtx, app: &App) -> Overlays {
        Overlays::BusRoute(app.primary.sim.time(), id, ShowBusRoute::new(id, ctx, app))
    }

    pub fn bus_passengers(id: BusRouteID, ctx: &mut EventCtx, app: &App) -> Overlays {
        let route = app.primary.map.get_br(id);
        let mut master_col = vec![ManagedWidget::row(vec![
            Line(format!("Passengers for {}", route.name))
                .roboto_bold()
                .draw(ctx),
            WrappedComposite::text_button(ctx, "X", None).align_right(),
        ])];
        let mut col = Vec::new();

        let mut delay_per_stop = app
            .primary
            .sim
            .get_analytics()
            .bus_passenger_delays(app.primary.sim.time(), id);
        for idx in 0..route.stops.len() {
            col.push(ManagedWidget::row(vec![
                format!("Stop {}", idx + 1).draw_text(ctx),
                ManagedWidget::btn(Button::rectangle_svg(
                    "../data/system/assets/tools/locate.svg",
                    &format!("Stop {}", idx + 1),
                    None,
                    RewriteColor::Change(Color::hex("#CC4121"), colors::HOVERING),
                    ctx,
                )),
                if let Some(hgram) = delay_per_stop.remove(&route.stops[idx]) {
                    format!(
                        ": {} (avg {})",
                        hgram.count(),
                        hgram.select(Statistic::Mean)
                    )
                    .draw_text(ctx)
                } else {
                    ": nobody".draw_text(ctx)
                },
            ]));
        }

        let y_len = ctx.default_line_height() * (route.stops.len() as f64);
        let mut batch = GeomBatch::new();
        batch.push(Color::CYAN, Polygon::rounded_rectangle(15.0, y_len, 4.0));
        for (_, stop_idx, percent_next_stop) in app.primary.sim.status_of_buses(route.id) {
            // TODO Line it up right in the middle of the line of text. This is probably a bit
            // wrong.
            let base_percent_y = if stop_idx == route.stops.len() - 1 {
                0.0
            } else {
                (stop_idx as f64) / ((route.stops.len() - 1) as f64)
            };
            batch.push(
                Color::BLUE,
                Circle::new(
                    Pt2D::new(
                        7.5,
                        base_percent_y * y_len + percent_next_stop * ctx.default_line_height(),
                    ),
                    Distance::meters(5.0),
                )
                .to_polygon(),
            );
        }
        let timeline = JustDraw::wrap(ctx, batch);

        master_col.push(ManagedWidget::row(vec![
            timeline.margin(5),
            ManagedWidget::col(col).margin(5),
        ]));

        let mut c = WrappedComposite::new(
            Composite::new(ManagedWidget::col(master_col).bg(colors::PANEL_BG))
                .aligned(HorizontalAlignment::Right, VerticalAlignment::Center)
                .build(ctx),
        );
        for (idx, stop) in route.stops.iter().enumerate() {
            let id = ID::BusStop(*stop);
            c = c.cb(
                &format!("Stop {}", idx + 1),
                Box::new(move |ctx, app| {
                    Some(Transition::Push(Warping::new(
                        ctx,
                        id.canonical_point(&app.primary).unwrap(),
                        Some(4.0),
                        Some(id.clone()),
                        &mut app.primary,
                    )))
                }),
            );
        }
        Overlays::BusPassengers(app.primary.sim.time(), id, c)
    }

    pub fn delays_over_time(id: BusRouteID, ctx: &mut EventCtx, app: &App) -> Overlays {
        let route = app.primary.map.get_br(id);
        let mut delays_per_stop = app
            .primary
            .sim
            .get_analytics()
            .bus_arrivals_over_time(app.primary.sim.time(), id);

        let mut series = Vec::new();
        for idx1 in 0..route.stops.len() {
            let idx2 = if idx1 == route.stops.len() - 1 {
                0
            } else {
                idx1 + 1
            };
            series.push(Series {
                label: format!("Stop {}->{}", idx1 + 1, idx2 + 1),
                color: rotating_color_map(idx1),
                pts: delays_per_stop
                    .remove(&route.stops[idx2])
                    .unwrap_or_else(Vec::new),
            });
        }
        Overlays::BusDelaysOverTime(
            app.primary.sim.time(),
            route.id,
            Composite::new(
                ManagedWidget::col(vec![
                    ManagedWidget::row(vec![
                        format!("delays for {}", route.name).draw_text(ctx),
                        WrappedComposite::text_button(ctx, "X", None).align_right(),
                    ]),
                    Plot::new_duration(ctx, series, PlotOptions::new()).margin(10),
                ])
                .bg(colors::PANEL_BG),
            )
            // TODO Doesn't fit
            .aligned(HorizontalAlignment::Right, VerticalAlignment::Center)
            .build(ctx),
        )
    }

    pub fn map_edits(ctx: &mut EventCtx, app: &App) -> Overlays {
        let edits = app.primary.map.get_edits();

        let mut txt = Text::from(Line(format!("map edits ({})", edits.edits_name)));
        txt.add(Line(format!(
            "{} lane types changed",
            edits.original_lts.len()
        )));
        txt.add(Line(format!(
            "{} lanes reversed",
            edits.reversed_lanes.len()
        )));
        txt.add(Line(format!(
            "{} intersections changed",
            edits.original_intersections.len()
        )));

        let changed = Color::RED;
        let mut colorer = Colorer::new(txt, vec![("modified lane/intersection", changed)]);

        for l in edits.original_lts.keys().chain(&edits.reversed_lanes) {
            colorer.add_l(*l, changed, &app.primary.map);
        }
        for i in edits.original_intersections.keys() {
            colorer.add_i(*i, changed);
        }

        Overlays::Edits(colorer.build(ctx, app))
    }
}
