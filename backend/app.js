import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(morgan("common"));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

//routes
import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);

export default app;
