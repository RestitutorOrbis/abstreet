(function() {var implementors = {};
implementors["abstutil"] = [{"text":"impl Freeze for FileWithProgress","synthetic":true,"types":[]},{"text":"impl Freeze for Manifest","synthetic":true,"types":[]},{"text":"impl Freeze for Entry","synthetic":true,"types":[]},{"text":"impl Freeze for CmdArgs","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Freeze for MultiMap&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Counter&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Freeze for VecMap&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Tags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Timer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Parallelism","synthetic":true,"types":[]},{"text":"impl Freeze for ROOT_DIR","synthetic":true,"types":[]},{"text":"impl Freeze for ROOT_PLAYER_DIR","synthetic":true,"types":[]},{"text":"impl !Freeze for Logger","synthetic":true,"types":[]},{"text":"impl Freeze for Progress","synthetic":true,"types":[]},{"text":"impl Freeze for TimerSpan","synthetic":true,"types":[]},{"text":"impl Freeze for TimedFileReader","synthetic":true,"types":[]},{"text":"impl Freeze for StackEntry","synthetic":true,"types":[]}];
implementors["convert_osm"] = [{"text":"impl Freeze for Options","synthetic":true,"types":[]},{"text":"impl Freeze for OnstreetParking","synthetic":true,"types":[]},{"text":"impl Freeze for PublicOffstreetParking","synthetic":true,"types":[]},{"text":"impl Freeze for PrivateOffstreetParking","synthetic":true,"types":[]},{"text":"impl Freeze for OsmExtract","synthetic":true,"types":[]},{"text":"impl Freeze for Document","synthetic":true,"types":[]},{"text":"impl Freeze for Node","synthetic":true,"types":[]},{"text":"impl Freeze for Way","synthetic":true,"types":[]},{"text":"impl Freeze for Relation","synthetic":true,"types":[]},{"text":"impl Freeze for Elevation","synthetic":true,"types":[]}];
implementors["game"] = [{"text":"impl !Freeze for App","synthetic":true,"types":[]},{"text":"impl Freeze for ShowLayers","synthetic":true,"types":[]},{"text":"impl Freeze for ShowEverything","synthetic":true,"types":[]},{"text":"impl Freeze for Flags","synthetic":true,"types":[]},{"text":"impl !Freeze for PerMap","synthetic":true,"types":[]},{"text":"impl Freeze for SessionState","synthetic":true,"types":[]},{"text":"impl Freeze for PerObjectActions","synthetic":true,"types":[]},{"text":"impl Freeze for FindDelayedIntersections","synthetic":true,"types":[]},{"text":"impl Freeze for Challenge","synthetic":true,"types":[]},{"text":"impl Freeze for HighScore","synthetic":true,"types":[]},{"text":"impl Freeze for ChallengesPicker","synthetic":true,"types":[]},{"text":"impl Freeze for ColorScheme","synthetic":true,"types":[]},{"text":"impl Freeze for ColorSchemeChoice","synthetic":true,"types":[]},{"text":"impl Freeze for CommonState","synthetic":true,"types":[]},{"text":"impl Freeze for CityPicker","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ColorDiscrete&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ColorLegend","synthetic":true,"types":[]},{"text":"impl Freeze for DivergingScale","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for ColorNetwork&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ColorScale","synthetic":true,"types":[]},{"text":"impl Freeze for HeatmapOptions","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Grid&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for IsochroneViewer","synthetic":true,"types":[]},{"text":"impl Freeze for Minimap","synthetic":true,"types":[]},{"text":"impl Freeze for Navigator","synthetic":true,"types":[]},{"text":"impl Freeze for CrossStreet","synthetic":true,"types":[]},{"text":"impl Freeze for SearchBuildings","synthetic":true,"types":[]},{"text":"impl Freeze for Warping","synthetic":true,"types":[]},{"text":"impl Freeze for DebugWarp","synthetic":true,"types":[]},{"text":"impl Freeze for CutsceneBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Scene","synthetic":true,"types":[]},{"text":"impl Freeze for CutscenePlayer","synthetic":true,"types":[]},{"text":"impl Freeze for FYI","synthetic":true,"types":[]},{"text":"impl Freeze for Layout","synthetic":true,"types":[]},{"text":"impl Freeze for DebugMode","synthetic":true,"types":[]},{"text":"impl Freeze for SearchResults","synthetic":true,"types":[]},{"text":"impl Freeze for Actions","synthetic":true,"types":[]},{"text":"impl Freeze for ScreenshotTest","synthetic":true,"types":[]},{"text":"impl Freeze for Floodfiller","synthetic":true,"types":[]},{"text":"impl Freeze for Source","synthetic":true,"types":[]},{"text":"impl Freeze for ObjectDebugger","synthetic":true,"types":[]},{"text":"impl Freeze for PathCounter","synthetic":true,"types":[]},{"text":"impl Freeze for PolygonDebugger","synthetic":true,"types":[]},{"text":"impl Freeze for Item","synthetic":true,"types":[]},{"text":"impl Freeze for DevToolsMode","synthetic":true,"types":[]},{"text":"impl Freeze for PopularDestinations","synthetic":true,"types":[]},{"text":"impl Freeze for ViewKML","synthetic":true,"types":[]},{"text":"impl Freeze for Object","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingMapper","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeWay","synthetic":true,"types":[]},{"text":"impl Freeze for Show","synthetic":true,"types":[]},{"text":"impl Freeze for Value","synthetic":true,"types":[]},{"text":"impl Freeze for PolygonEditor","synthetic":true,"types":[]},{"text":"impl Freeze for ScenarioManager","synthetic":true,"types":[]},{"text":"impl Freeze for StoryMapEditor","synthetic":true,"types":[]},{"text":"impl Freeze for RecordedStoryMap","synthetic":true,"types":[]},{"text":"impl Freeze for StoryMap","synthetic":true,"types":[]},{"text":"impl Freeze for Marker","synthetic":true,"types":[]},{"text":"impl Freeze for Lasso","synthetic":true,"types":[]},{"text":"impl Freeze for Mode","synthetic":true,"types":[]},{"text":"impl Freeze for EditMode","synthetic":true,"types":[]},{"text":"impl Freeze for SaveEdits","synthetic":true,"types":[]},{"text":"impl Freeze for LoadEdits","synthetic":true,"types":[]},{"text":"impl Freeze for ConfirmDiscard","synthetic":true,"types":[]},{"text":"impl Freeze for BulkSelect","synthetic":true,"types":[]},{"text":"impl Freeze for BulkEdit","synthetic":true,"types":[]},{"text":"impl Freeze for ClusterTrafficSignalEditor","synthetic":true,"types":[]},{"text":"impl Freeze for LaneEditor","synthetic":true,"types":[]},{"text":"impl Freeze for RouteEditor","synthetic":true,"types":[]},{"text":"impl Freeze for RoadSelector","synthetic":true,"types":[]},{"text":"impl Freeze for Mode","synthetic":true,"types":[]},{"text":"impl Freeze for StopSignEditor","synthetic":true,"types":[]},{"text":"impl Freeze for TrafficSignalEditor","synthetic":true,"types":[]},{"text":"impl Freeze for BundleEdits","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeDuration","synthetic":true,"types":[]},{"text":"impl Freeze for ShowAbsolute","synthetic":true,"types":[]},{"text":"impl Freeze for ShowRelative","synthetic":true,"types":[]},{"text":"impl Freeze for TuneRelative","synthetic":true,"types":[]},{"text":"impl Freeze for SignalPicker","synthetic":true,"types":[]},{"text":"impl Freeze for PreviewTrafficSignal","synthetic":true,"types":[]},{"text":"impl Freeze for ZoneEditor","synthetic":true,"types":[]},{"text":"impl !Freeze for Game","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ChooseSomething&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PromptInput","synthetic":true,"types":[]},{"text":"impl Freeze for PopupMsg","synthetic":true,"types":[]},{"text":"impl Freeze for DrawBaselayer","synthetic":true,"types":[]},{"text":"impl Freeze for Transition","synthetic":true,"types":[]},{"text":"impl Freeze for ID","synthetic":true,"types":[]},{"text":"impl Freeze for InfoPanel","synthetic":true,"types":[]},{"text":"impl Freeze for Details","synthetic":true,"types":[]},{"text":"impl Freeze for DataOptions","synthetic":true,"types":[]},{"text":"impl Freeze for Tab","synthetic":true,"types":[]},{"text":"impl Freeze for OpenTrip","synthetic":true,"types":[]},{"text":"impl Freeze for PickLayer","synthetic":true,"types":[]},{"text":"impl Freeze for LayerOutcome","synthetic":true,"types":[]},{"text":"impl Freeze for Elevation","synthetic":true,"types":[]},{"text":"impl Freeze for BikeNetwork","synthetic":true,"types":[]},{"text":"impl Freeze for Static","synthetic":true,"types":[]},{"text":"impl Freeze for CongestionCaps","synthetic":true,"types":[]},{"text":"impl Freeze for Pandemic","synthetic":true,"types":[]},{"text":"impl Freeze for Options","synthetic":true,"types":[]},{"text":"impl Freeze for SEIR","synthetic":true,"types":[]},{"text":"impl Freeze for Occupancy","synthetic":true,"types":[]},{"text":"impl Freeze for Efficiency","synthetic":true,"types":[]},{"text":"impl Freeze for Loc","synthetic":true,"types":[]},{"text":"impl Freeze for PopulationMap","synthetic":true,"types":[]},{"text":"impl Freeze for Options","synthetic":true,"types":[]},{"text":"impl Freeze for Backpressure","synthetic":true,"types":[]},{"text":"impl Freeze for Throughput","synthetic":true,"types":[]},{"text":"impl Freeze for CompareThroughput","synthetic":true,"types":[]},{"text":"impl Freeze for TrafficJams","synthetic":true,"types":[]},{"text":"impl Freeze for Jam","synthetic":true,"types":[]},{"text":"impl Freeze for Delay","synthetic":true,"types":[]},{"text":"impl Freeze for TransitNetwork","synthetic":true,"types":[]},{"text":"impl Freeze for MapLoader","synthetic":true,"types":[]},{"text":"impl Freeze for MapAlreadyLoaded","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for FileLoader&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Options","synthetic":true,"types":[]},{"text":"impl Freeze for OptionsPanel","synthetic":true,"types":[]},{"text":"impl Freeze for TrafficSignalStyle","synthetic":true,"types":[]},{"text":"impl Freeze for CameraAngle","synthetic":true,"types":[]},{"text":"impl Freeze for TitleScreen","synthetic":true,"types":[]},{"text":"impl Freeze for MainMenu","synthetic":true,"types":[]},{"text":"impl Freeze for About","synthetic":true,"types":[]},{"text":"impl Freeze for Proposals","synthetic":true,"types":[]},{"text":"impl Freeze for Screensaver","synthetic":true,"types":[]},{"text":"impl Freeze for DrawOptions","synthetic":true,"types":[]},{"text":"impl Freeze for DrawArea","synthetic":true,"types":[]},{"text":"impl Freeze for DrawBike","synthetic":true,"types":[]},{"text":"impl !Freeze for DrawBuilding","synthetic":true,"types":[]},{"text":"impl Freeze for DrawBusStop","synthetic":true,"types":[]},{"text":"impl Freeze for DrawCar","synthetic":true,"types":[]},{"text":"impl !Freeze for DrawIntersection","synthetic":true,"types":[]},{"text":"impl !Freeze for DrawLane","synthetic":true,"types":[]},{"text":"impl !Freeze for DrawMap","synthetic":true,"types":[]},{"text":"impl Freeze for AgentCache","synthetic":true,"types":[]},{"text":"impl Freeze for UnzoomedAgents","synthetic":true,"types":[]},{"text":"impl !Freeze for DrawParkingLot","synthetic":true,"types":[]},{"text":"impl Freeze for DrawPedestrian","synthetic":true,"types":[]},{"text":"impl Freeze for DrawPedCrowd","synthetic":true,"types":[]},{"text":"impl !Freeze for DrawRoad","synthetic":true,"types":[]},{"text":"impl Freeze for DrawMovement","synthetic":true,"types":[]},{"text":"impl Freeze for DrawUberTurnGroup","synthetic":true,"types":[]},{"text":"impl Freeze for SandboxMode","synthetic":true,"types":[]},{"text":"impl Freeze for SandboxControls","synthetic":true,"types":[]},{"text":"impl Freeze for BackToMainMenu","synthetic":true,"types":[]},{"text":"impl Freeze for AgentMeter","synthetic":true,"types":[]},{"text":"impl Freeze for Actions","synthetic":true,"types":[]},{"text":"impl Freeze for DashTab","synthetic":true,"types":[]},{"text":"impl Freeze for CommuterPatterns","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for PanelState&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Block","synthetic":true,"types":[]},{"text":"impl Freeze for Filter","synthetic":true,"types":[]},{"text":"impl Freeze for Loop","synthetic":true,"types":[]},{"text":"impl Freeze for BlockSelection","synthetic":true,"types":[]},{"text":"impl Freeze for BorderType","synthetic":true,"types":[]},{"text":"impl&lt;T, F, P&gt; Freeze for GenericTripTable&lt;T, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ActiveTraffic","synthetic":true,"types":[]},{"text":"impl Freeze for TransitRoutes","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingOverhead","synthetic":true,"types":[]},{"text":"impl Freeze for Entry","synthetic":true,"types":[]},{"text":"impl Freeze for Filters","synthetic":true,"types":[]},{"text":"impl Freeze for TripSummaries","synthetic":true,"types":[]},{"text":"impl Freeze for Filter","synthetic":true,"types":[]},{"text":"impl&lt;T, F&gt; Freeze for Table&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Column&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, F&gt; Freeze for Filter&lt;T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Col&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TrafficSignalDemand","synthetic":true,"types":[]},{"text":"impl Freeze for Demand","synthetic":true,"types":[]},{"text":"impl Freeze for FinishedTripTable","synthetic":true,"types":[]},{"text":"impl Freeze for CancelledTripTable","synthetic":true,"types":[]},{"text":"impl Freeze for UnfinishedTripTable","synthetic":true,"types":[]},{"text":"impl Freeze for FinishedTrip","synthetic":true,"types":[]},{"text":"impl Freeze for CancelledTrip","synthetic":true,"types":[]},{"text":"impl Freeze for UnfinishedTrip","synthetic":true,"types":[]},{"text":"impl Freeze for Filters","synthetic":true,"types":[]},{"text":"impl Freeze for FinalScore","synthetic":true,"types":[]},{"text":"impl Freeze for GameplayMode","synthetic":true,"types":[]},{"text":"impl Freeze for LoadScenario","synthetic":true,"types":[]},{"text":"impl Freeze for OptimizeCommute","synthetic":true,"types":[]},{"text":"impl Freeze for FixTrafficSignals","synthetic":true,"types":[]},{"text":"impl Freeze for Freeform","synthetic":true,"types":[]},{"text":"impl Freeze for AgentSpawner","synthetic":true,"types":[]},{"text":"impl Freeze for PlayScenario","synthetic":true,"types":[]},{"text":"impl Freeze for EditScenarioModifiers","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeMode","synthetic":true,"types":[]},{"text":"impl Freeze for Tutorial","synthetic":true,"types":[]},{"text":"impl Freeze for TutorialPointer","synthetic":true,"types":[]},{"text":"impl Freeze for Stage","synthetic":true,"types":[]},{"text":"impl Freeze for TutorialState","synthetic":true,"types":[]},{"text":"impl Freeze for Task","synthetic":true,"types":[]},{"text":"impl Freeze for RoutePreview","synthetic":true,"types":[]},{"text":"impl Freeze for TurnExplorer","synthetic":true,"types":[]},{"text":"impl Freeze for SpeedControls","synthetic":true,"types":[]},{"text":"impl Freeze for TimePanel","synthetic":true,"types":[]},{"text":"impl Freeze for SpeedSetting","synthetic":true,"types":[]},{"text":"impl Freeze for JumpToTime","synthetic":true,"types":[]},{"text":"impl Freeze for JumpToDelay","synthetic":true,"types":[]},{"text":"impl Freeze for TimeWarpScreen","synthetic":true,"types":[]},{"text":"impl Freeze for UberTurnPicker","synthetic":true,"types":[]},{"text":"impl Freeze for UberTurnViewer","synthetic":true,"types":[]}];
implementors["geom"] = [{"text":"impl Freeze for Angle","synthetic":true,"types":[]},{"text":"impl Freeze for Bounds","synthetic":true,"types":[]},{"text":"impl Freeze for GPSBounds","synthetic":true,"types":[]},{"text":"impl Freeze for Circle","synthetic":true,"types":[]},{"text":"impl Freeze for Distance","synthetic":true,"types":[]},{"text":"impl Freeze for Duration","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Freeze for FindClosest&lt;K&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for LonLat","synthetic":true,"types":[]},{"text":"impl Freeze for InfiniteLine","synthetic":true,"types":[]},{"text":"impl Freeze for Line","synthetic":true,"types":[]},{"text":"impl Freeze for Percent","synthetic":true,"types":[]},{"text":"impl Freeze for Polygon","synthetic":true,"types":[]},{"text":"impl Freeze for Triangle","synthetic":true,"types":[]},{"text":"impl Freeze for PolyLine","synthetic":true,"types":[]},{"text":"impl Freeze for HashablePt2D","synthetic":true,"types":[]},{"text":"impl Freeze for Pt2D","synthetic":true,"types":[]},{"text":"impl Freeze for Ring","synthetic":true,"types":[]},{"text":"impl Freeze for Speed","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Histogram&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Time","synthetic":true,"types":[]},{"text":"impl Freeze for UnitFmt","synthetic":true,"types":[]},{"text":"impl Freeze for ArrowCap","synthetic":true,"types":[]},{"text":"impl Freeze for Statistic","synthetic":true,"types":[]}];
implementors["headless"] = [{"text":"impl Freeze for MAP","synthetic":true,"types":[]},{"text":"impl Freeze for SIM","synthetic":true,"types":[]},{"text":"impl Freeze for LOAD","synthetic":true,"types":[]},{"text":"impl Freeze for FinishedTrip","synthetic":true,"types":[]},{"text":"impl Freeze for Delays","synthetic":true,"types":[]},{"text":"impl Freeze for Throughput","synthetic":true,"types":[]},{"text":"impl Freeze for AgentPositions","synthetic":true,"types":[]},{"text":"impl Freeze for AgentPosition","synthetic":true,"types":[]},{"text":"impl Freeze for RoadThroughput","synthetic":true,"types":[]},{"text":"impl Freeze for TrafficSignalState","synthetic":true,"types":[]},{"text":"impl Freeze for LoadSim","synthetic":true,"types":[]}];
implementors["import_traffic"] = [{"text":"impl Freeze for Input","synthetic":true,"types":[]}];
implementors["importer"] = [{"text":"impl Freeze for Job","synthetic":true,"types":[]},{"text":"impl Freeze for Record","synthetic":true,"types":[]},{"text":"impl Freeze for ImporterConfiguration","synthetic":true,"types":[]},{"text":"impl Freeze for TripRecord","synthetic":true,"types":[]},{"text":"impl Freeze for StopTimeRecord","synthetic":true,"types":[]}];
implementors["kml"] = [{"text":"impl Freeze for ExtraShapes","synthetic":true,"types":[]},{"text":"impl Freeze for ExtraShape","synthetic":true,"types":[]}];
implementors["map_editor"] = [{"text":"impl Freeze for UI","synthetic":true,"types":[]},{"text":"impl Freeze for State","synthetic":true,"types":[]},{"text":"impl Freeze for Model","synthetic":true,"types":[]},{"text":"impl Freeze for ID","synthetic":true,"types":[]},{"text":"impl&lt;ID&gt; Freeze for Object&lt;ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for WorldObject","synthetic":true,"types":[]},{"text":"impl&lt;ID&gt; Freeze for World&lt;ID&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ID: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["map_model"] = [{"text":"impl Freeze for City","synthetic":true,"types":[]},{"text":"impl Freeze for EditEffects","synthetic":true,"types":[]},{"text":"impl Freeze for EditRoad","synthetic":true,"types":[]},{"text":"impl Freeze for MapEdits","synthetic":true,"types":[]},{"text":"impl Freeze for PermanentMapEdits","synthetic":true,"types":[]},{"text":"impl Freeze for MapConfig","synthetic":true,"types":[]},{"text":"impl Freeze for Area","synthetic":true,"types":[]},{"text":"impl Freeze for AreaID","synthetic":true,"types":[]},{"text":"impl Freeze for Building","synthetic":true,"types":[]},{"text":"impl Freeze for BuildingID","synthetic":true,"types":[]},{"text":"impl Freeze for NamePerLanguage","synthetic":true,"types":[]},{"text":"impl Freeze for BusRoute","synthetic":true,"types":[]},{"text":"impl Freeze for BusRouteID","synthetic":true,"types":[]},{"text":"impl Freeze for BusStop","synthetic":true,"types":[]},{"text":"impl Freeze for BusStopID","synthetic":true,"types":[]},{"text":"impl Freeze for Intersection","synthetic":true,"types":[]},{"text":"impl Freeze for IntersectionID","synthetic":true,"types":[]},{"text":"impl Freeze for Lane","synthetic":true,"types":[]},{"text":"impl Freeze for LaneID","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingLot","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingLotID","synthetic":true,"types":[]},{"text":"impl Freeze for DirectedRoadID","synthetic":true,"types":[]},{"text":"impl Freeze for Road","synthetic":true,"types":[]},{"text":"impl Freeze for RoadID","synthetic":true,"types":[]},{"text":"impl Freeze for ControlStopSign","synthetic":true,"types":[]},{"text":"impl Freeze for RoadWithStopSign","synthetic":true,"types":[]},{"text":"impl Freeze for ControlTrafficSignal","synthetic":true,"types":[]},{"text":"impl Freeze for Stage","synthetic":true,"types":[]},{"text":"impl Freeze for CompressedMovementID","synthetic":true,"types":[]},{"text":"impl Freeze for Movement","synthetic":true,"types":[]},{"text":"impl Freeze for MovementID","synthetic":true,"types":[]},{"text":"impl Freeze for Turn","synthetic":true,"types":[]},{"text":"impl Freeze for TurnID","synthetic":true,"types":[]},{"text":"impl Freeze for AccessRestrictions","synthetic":true,"types":[]},{"text":"impl Freeze for Zone","synthetic":true,"types":[]},{"text":"impl Freeze for IntersectionCluster","synthetic":true,"types":[]},{"text":"impl Freeze for UberTurn","synthetic":true,"types":[]},{"text":"impl Freeze for UberTurnGroup","synthetic":true,"types":[]},{"text":"impl Freeze for Path","synthetic":true,"types":[]},{"text":"impl Freeze for PathRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Position","synthetic":true,"types":[]},{"text":"impl !Freeze for Map","synthetic":true,"types":[]},{"text":"impl Freeze for EditCmd","synthetic":true,"types":[]},{"text":"impl Freeze for EditIntersection","synthetic":true,"types":[]},{"text":"impl Freeze for DrivingSide","synthetic":true,"types":[]},{"text":"impl Freeze for AreaType","synthetic":true,"types":[]},{"text":"impl Freeze for BuildingType","synthetic":true,"types":[]},{"text":"impl Freeze for OffstreetParking","synthetic":true,"types":[]},{"text":"impl Freeze for IntersectionType","synthetic":true,"types":[]},{"text":"impl Freeze for LaneType","synthetic":true,"types":[]},{"text":"impl Freeze for Direction","synthetic":true,"types":[]},{"text":"impl Freeze for PhaseType","synthetic":true,"types":[]},{"text":"impl Freeze for TurnPriority","synthetic":true,"types":[]},{"text":"impl Freeze for TurnType","synthetic":true,"types":[]},{"text":"impl Freeze for PathConstraints","synthetic":true,"types":[]},{"text":"impl Freeze for PathStep","synthetic":true,"types":[]},{"text":"impl Freeze for Traversable","synthetic":true,"types":[]},{"text":"impl Freeze for OriginalLane","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeLaneType","synthetic":true,"types":[]},{"text":"impl Freeze for ReverseLane","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeSpeedLimit","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeAccessRestrictions","synthetic":true,"types":[]},{"text":"impl Freeze for PermanentEditIntersection","synthetic":true,"types":[]},{"text":"impl Freeze for PermanentEditCmd","synthetic":true,"types":[]},{"text":"impl Freeze for InitialMap","synthetic":true,"types":[]},{"text":"impl Freeze for Road","synthetic":true,"types":[]},{"text":"impl Freeze for Intersection","synthetic":true,"types":[]},{"text":"impl Freeze for Piece","synthetic":true,"types":[]},{"text":"impl Freeze for LaneSpec","synthetic":true,"types":[]},{"text":"impl Freeze for Partition","synthetic":true,"types":[]},{"text":"impl Freeze for Matcher","synthetic":true,"types":[]},{"text":"impl Freeze for NodeID","synthetic":true,"types":[]},{"text":"impl Freeze for WayID","synthetic":true,"types":[]},{"text":"impl Freeze for RelationID","synthetic":true,"types":[]},{"text":"impl Freeze for RoadRank","synthetic":true,"types":[]},{"text":"impl Freeze for OsmID","synthetic":true,"types":[]},{"text":"impl !Freeze for Pathfinder","synthetic":true,"types":[]},{"text":"impl !Freeze for ContractionHierarchyPathfinder","synthetic":true,"types":[]},{"text":"impl !Freeze for VehiclePathfinder","synthetic":true,"types":[]},{"text":"impl Freeze for Node","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for NodeMap&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Freeze for SidewalkPathfinder","synthetic":true,"types":[]},{"text":"impl Freeze for WalkingNode","synthetic":true,"types":[]},{"text":"impl Freeze for RawMap","synthetic":true,"types":[]},{"text":"impl Freeze for OriginalRoad","synthetic":true,"types":[]},{"text":"impl Freeze for RawRoad","synthetic":true,"types":[]},{"text":"impl Freeze for RawIntersection","synthetic":true,"types":[]},{"text":"impl Freeze for RawBuilding","synthetic":true,"types":[]},{"text":"impl Freeze for RawArea","synthetic":true,"types":[]},{"text":"impl Freeze for RawParkingLot","synthetic":true,"types":[]},{"text":"impl Freeze for TurnRestriction","synthetic":true,"types":[]},{"text":"impl Freeze for RawBusRoute","synthetic":true,"types":[]},{"text":"impl Freeze for RawBusStop","synthetic":true,"types":[]},{"text":"impl Freeze for RestrictionType","synthetic":true,"types":[]}];
implementors["sim"] = [{"text":"impl Freeze for DontDrawAgents","synthetic":true,"types":[]},{"text":"impl Freeze for DrawCarInput","synthetic":true,"types":[]},{"text":"impl Freeze for DrawPedCrowdInput","synthetic":true,"types":[]},{"text":"impl Freeze for DrawPedestrianInput","synthetic":true,"types":[]},{"text":"impl Freeze for UnzoomedAgent","synthetic":true,"types":[]},{"text":"impl Freeze for Analytics","synthetic":true,"types":[]},{"text":"impl Freeze for TripPhase","synthetic":true,"types":[]},{"text":"impl Freeze for BorderSpawnOverTime","synthetic":true,"types":[]},{"text":"impl Freeze for ExternalPerson","synthetic":true,"types":[]},{"text":"impl Freeze for ExternalTrip","synthetic":true,"types":[]},{"text":"impl Freeze for IndividTrip","synthetic":true,"types":[]},{"text":"impl Freeze for OffMapLocation","synthetic":true,"types":[]},{"text":"impl Freeze for PersonSpec","synthetic":true,"types":[]},{"text":"impl Freeze for Scenario","synthetic":true,"types":[]},{"text":"impl Freeze for ScenarioGenerator","synthetic":true,"types":[]},{"text":"impl Freeze for SimFlags","synthetic":true,"types":[]},{"text":"impl Freeze for SpawnOverTime","synthetic":true,"types":[]},{"text":"impl Freeze for TripSpawner","synthetic":true,"types":[]},{"text":"impl Freeze for AgentProperties","synthetic":true,"types":[]},{"text":"impl Freeze for Sim","synthetic":true,"types":[]},{"text":"impl Freeze for SimOptions","synthetic":true,"types":[]},{"text":"impl Freeze for Person","synthetic":true,"types":[]},{"text":"impl Freeze for TripInfo","synthetic":true,"types":[]},{"text":"impl Freeze for CarID","synthetic":true,"types":[]},{"text":"impl Freeze for PedestrianID","synthetic":true,"types":[]},{"text":"impl Freeze for TripID","synthetic":true,"types":[]},{"text":"impl Freeze for PersonID","synthetic":true,"types":[]},{"text":"impl Freeze for OrigPersonID","synthetic":true,"types":[]},{"text":"impl Freeze for Vehicle","synthetic":true,"types":[]},{"text":"impl Freeze for VehicleSpec","synthetic":true,"types":[]},{"text":"impl Freeze for ParkedCar","synthetic":true,"types":[]},{"text":"impl Freeze for SidewalkSpot","synthetic":true,"types":[]},{"text":"impl Freeze for TimeInterval","synthetic":true,"types":[]},{"text":"impl Freeze for DistanceInterval","synthetic":true,"types":[]},{"text":"impl Freeze for CreatePedestrian","synthetic":true,"types":[]},{"text":"impl Freeze for CreateCar","synthetic":true,"types":[]},{"text":"impl Freeze for CarStatus","synthetic":true,"types":[]},{"text":"impl Freeze for PedCrowdLocation","synthetic":true,"types":[]},{"text":"impl Freeze for AlertLocation","synthetic":true,"types":[]},{"text":"impl Freeze for TripPhaseType","synthetic":true,"types":[]},{"text":"impl Freeze for ExternalTripEndpoint","synthetic":true,"types":[]},{"text":"impl Freeze for OriginDestination","synthetic":true,"types":[]},{"text":"impl Freeze for ScenarioModifier","synthetic":true,"types":[]},{"text":"impl Freeze for SpawnTrip","synthetic":true,"types":[]},{"text":"impl Freeze for TripPurpose","synthetic":true,"types":[]},{"text":"impl Freeze for TripSpec","synthetic":true,"types":[]},{"text":"impl Freeze for AlertHandler","synthetic":true,"types":[]},{"text":"impl Freeze for PersonState","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TripResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for TripEndpoint","synthetic":true,"types":[]},{"text":"impl Freeze for TripMode","synthetic":true,"types":[]},{"text":"impl Freeze for AgentID","synthetic":true,"types":[]},{"text":"impl Freeze for AgentType","synthetic":true,"types":[]},{"text":"impl Freeze for VehicleType","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingSpot","synthetic":true,"types":[]},{"text":"impl Freeze for DrivingGoal","synthetic":true,"types":[]},{"text":"impl Freeze for SidewalkPOI","synthetic":true,"types":[]},{"text":"impl&lt;X&gt; Freeze for TimeSeriesCount&lt;X&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Window","synthetic":true,"types":[]},{"text":"impl Freeze for CapSimState","synthetic":true,"types":[]},{"text":"impl Freeze for Zone","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Car","synthetic":true,"types":[]},{"text":"impl Freeze for CarState","synthetic":true,"types":[]},{"text":"impl Freeze for DrivingSimState","synthetic":true,"types":[]},{"text":"impl Freeze for IntersectionSimState","synthetic":true,"types":[]},{"text":"impl Freeze for State","synthetic":true,"types":[]},{"text":"impl Freeze for SignalState","synthetic":true,"types":[]},{"text":"impl Freeze for Request","synthetic":true,"types":[]},{"text":"impl Freeze for NormalParkingSimState","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingLane","synthetic":true,"types":[]},{"text":"impl Freeze for InfiniteParkingSimState","synthetic":true,"types":[]},{"text":"impl Freeze for ParkingSimState","synthetic":true,"types":[]},{"text":"impl Freeze for Queue","synthetic":true,"types":[]},{"text":"impl Freeze for WalkingSimState","synthetic":true,"types":[]},{"text":"impl Freeze for Pedestrian","synthetic":true,"types":[]},{"text":"impl Freeze for PedState","synthetic":true,"types":[]},{"text":"impl Freeze for AnyTime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for StateEvent","synthetic":true,"types":[]},{"text":"impl Freeze for State","synthetic":true,"types":[]},{"text":"impl Freeze for PandemicModel","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for SharedSpace&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Cmd","synthetic":true,"types":[]},{"text":"impl Freeze for Router","synthetic":true,"types":[]},{"text":"impl Freeze for ActionAtEnd","synthetic":true,"types":[]},{"text":"impl Freeze for Goal","synthetic":true,"types":[]},{"text":"impl Freeze for Item","synthetic":true,"types":[]},{"text":"impl Freeze for Scheduler","synthetic":true,"types":[]},{"text":"impl Freeze for Command","synthetic":true,"types":[]},{"text":"impl Freeze for CommandType","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for Ctx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Stop","synthetic":true,"types":[]},{"text":"impl Freeze for Route","synthetic":true,"types":[]},{"text":"impl Freeze for Bus","synthetic":true,"types":[]},{"text":"impl Freeze for TransitSimState","synthetic":true,"types":[]},{"text":"impl Freeze for BusState","synthetic":true,"types":[]},{"text":"impl Freeze for TripManager","synthetic":true,"types":[]},{"text":"impl Freeze for Trip","synthetic":true,"types":[]},{"text":"impl Freeze for TripLeg","synthetic":true,"types":[]}];
implementors["updater"] = [{"text":"impl Freeze for Cities","synthetic":true,"types":[]}];
implementors["widgetry"] = [{"text":"impl Freeze for Drawable","synthetic":true,"types":[]},{"text":"impl !Freeze for Canvas","synthetic":true,"types":[]},{"text":"impl Freeze for Color","synthetic":true,"types":[]},{"text":"impl Freeze for LinearGradient","synthetic":true,"types":[]},{"text":"impl Freeze for Texture","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for GfxCtx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Freeze for Prerender","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for EventCtx&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for GeomBatch","synthetic":true,"types":[]},{"text":"impl Freeze for UserInput","synthetic":true,"types":[]},{"text":"impl Freeze for Settings","synthetic":true,"types":[]},{"text":"impl Freeze for ScreenDims","synthetic":true,"types":[]},{"text":"impl Freeze for ScreenPt","synthetic":true,"types":[]},{"text":"impl Freeze for ScreenRectangle","synthetic":true,"types":[]},{"text":"impl Freeze for Style","synthetic":true,"types":[]},{"text":"impl Freeze for Text","synthetic":true,"types":[]},{"text":"impl Freeze for TextSpan","synthetic":true,"types":[]},{"text":"impl Freeze for Warper","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Autocomplete&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Btn","synthetic":true,"types":[]},{"text":"impl Freeze for MultiButton","synthetic":true,"types":[]},{"text":"impl Freeze for Checkbox","synthetic":true,"types":[]},{"text":"impl Freeze for CompareTimes","synthetic":true,"types":[]},{"text":"impl Freeze for FanChart","synthetic":true,"types":[]},{"text":"impl Freeze for Filler","synthetic":true,"types":[]},{"text":"impl Freeze for DrawWithTooltips","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for LinePlot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PlotOptions&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Series&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Menu&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PersistentSplit&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ScatterPlot","synthetic":true,"types":[]},{"text":"impl Freeze for AreaSlider","synthetic":true,"types":[]},{"text":"impl Freeze for Slider","synthetic":true,"types":[]},{"text":"impl Freeze for Spinner","synthetic":true,"types":[]},{"text":"impl Freeze for EdgeInsets","synthetic":true,"types":[]},{"text":"impl Freeze for Panel","synthetic":true,"types":[]},{"text":"impl Freeze for Widget","synthetic":true,"types":[]},{"text":"impl Freeze for WidgetOutput","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Choice&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for HorizontalAlignment","synthetic":true,"types":[]},{"text":"impl Freeze for VerticalAlignment","synthetic":true,"types":[]},{"text":"impl Freeze for Fill","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Key","synthetic":true,"types":[]},{"text":"impl Freeze for MultiKey","synthetic":true,"types":[]},{"text":"impl Freeze for UpdateType","synthetic":true,"types":[]},{"text":"impl Freeze for RewriteColor","synthetic":true,"types":[]},{"text":"impl Freeze for Outcome","synthetic":true,"types":[]},{"text":"impl !Freeze for Assets","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for GfxCtxInnards&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for VertexArray","synthetic":true,"types":[]},{"text":"impl Freeze for Buffer","synthetic":true,"types":[]},{"text":"impl !Freeze for PrerenderInnards","synthetic":true,"types":[]},{"text":"impl !Freeze for WindowAdapter","synthetic":true,"types":[]},{"text":"impl Freeze for CameraState","synthetic":true,"types":[]},{"text":"impl Freeze for Uniforms","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Freeze for LoadingScreen&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;G&gt; !Freeze for State&lt;G&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for PathConvIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Font","synthetic":true,"types":[]},{"text":"impl Freeze for LayoutStyle","synthetic":true,"types":[]},{"text":"impl Freeze for Button","synthetic":true,"types":[]},{"text":"impl Freeze for BtnBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Nothing","synthetic":true,"types":[]},{"text":"impl Freeze for Container","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Dropdown&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for JustDraw","synthetic":true,"types":[]},{"text":"impl Freeze for DeferDraw","synthetic":true,"types":[]},{"text":"impl Freeze for PanelBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for Dims","synthetic":true,"types":[]},{"text":"impl Freeze for TextBox","synthetic":true,"types":[]}];
implementors["widgetry_demo"] = [{"text":"impl Freeze for App","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()