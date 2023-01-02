import { Router } from "express";

import Controllers from "../../controllers/todo/todo.controller";

// All routes related to ToDo
const ToDoRoutes = Router();

    // Route list ToDo
    ToDoRoutes.get(
        '/',
        Controllers.read
    );

    // Route create ToDo
    ToDoRoutes.post(
        '/',
        Controllers.create
    );

    // Route delete ToDo
    ToDoRoutes.delete(
        '/',
        Controllers.delete
    );

    // Route update ToDo
    ToDoRoutes.patch(
        '/',
        Controllers.update
    )

export default ToDoRoutes;