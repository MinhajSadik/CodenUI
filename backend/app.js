import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

//routes
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

export default app;
