import express from "express"

import itemsRoute from "./routes/itemsRoute.js"
import productsRoute from "./routes/productsRoute1.js"
import { loggingMiddleware } from "./middlewares/logging1.js"
import { apiErrorHandler } from "./middlewares/error.js"
import { routeNotFound } from "./middlewares/routeNotFound.js"
import usersRoute from "./routes/usersRoute.js"
import authRoute from "./routes/authRoute.js"
import categoriesRoute from "./routes/categoriesRoute.js";
import productsRoute1 from "./routes/productsRoute1.js"

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/hello", loggingMiddleware, (_, res) => {
  res.json({ msg: "hello, from Express.js!" })
})

app.use(loggingMiddleware);

app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productsRoute1)

app.use(apiErrorHandler);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`👀 app is running at localhost:${PORT}`);
});
