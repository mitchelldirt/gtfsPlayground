import { importGtfs, getRoutes, openDb, closeDb } from "gtfs";
import { readFile } from "fs/promises";

const config = JSON.parse(
  await readFile(new URL("./config.json", import.meta.url))
);

try {
  const db = openDb(config);

  const routes = getRoutes({}, [], [["route_short_name", "ASC"]]);
  
  console.log(routes);

  closeDb(db);

} catch (error) {
  console.error(error);
}
