import bodyParser from "body-parser";
import express from "express";
import { router } from "./routes/loginRoutes";

import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(AppRouter.getInstance());

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
