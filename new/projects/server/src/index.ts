import bodyParser from "body-parser";
import express from "express";
import { router } from "./routes/loginRoutes";

import "./controllers/LoginController";
import { router as controllerRouter } from "./controllers/decorators/controller";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
