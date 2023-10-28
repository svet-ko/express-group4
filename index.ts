import express from "express";
import categoriesRoute from "./routes/categoriesRoute.js";
import { loggingMiddleware } from "./middlewares/logging.js";
import { apiErrorHandler } from "./middlewares/error.js";
import { routeNotFound } from "./middlewares/routeNotFound.js";

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/hello", loggingMiddleware, (_, res) => {
  res.json({ msg: "hello, from Express.js!" });
});

app.use("/", categoriesRoute);

app.use(apiErrorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
