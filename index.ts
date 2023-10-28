import express from "express";
import { loggingMiddleware } from "./middlewares/logging.js";
import { apiErrorHandler } from "./middlewares/error.js";
import { routeNotFound } from "./middlewares/routeNotFound.js";
import itemsRoute from "./routes/itemsRoute.js"
import productsRoute from "./routes/productsRoute.js"
import usersRoute from "./routes/usersRoute.js"
import authRoute from "./routes/authRoute.js"
import categoriesRoute from "./routes/categoriesRoute.js";

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/hello", loggingMiddleware, (_, res) => {
  res.json({ msg: "hello, from Express.js!" });
});

app.use("/", categoriesRoute);
app.use("/api/v1/items", itemsRoute)
app.use("/api/v1/products", productsRoute)
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/auth", authRoute);

app.use(apiErrorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
