import { Express } from "express";
import ToDoRoutes from "./todo/todo.routes";

// All app routes
export const appRoutes = (
    app: Express
) => {

    // ToDo routes
    app.use(
        '/todo',
        ToDoRoutes
    )

};