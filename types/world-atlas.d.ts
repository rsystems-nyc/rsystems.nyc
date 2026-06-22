// world-atlas ships TopoJSON files with no bundled types. Declare the one we
// import as a TopoJSON Topology so topojson-client's feature() accepts it.
declare module "world-atlas/countries-110m.json" {
  const topology: import("topojson-specification").Topology;
  export default topology;
}
