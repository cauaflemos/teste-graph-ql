import express from "express";
import { appRoutes } from "./routes/index";

const app = express();

app.use(express.json());

appRoutes(app);

app.listen(3000);