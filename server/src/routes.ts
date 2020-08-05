import express from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionControllers = new ConnectionController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.post("/connections", connectionControllers.create);
routes.get("/connections", connectionControllers.index);

export default routes;
