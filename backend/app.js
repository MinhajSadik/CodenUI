import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.static(path.join(__dirname, "/admin/build")));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));


//routes
import adminRoute from './routes/admin.route.js';
import categoryRoute from "./routes/category.route.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";

app.use("/api/v1/user", userRoute);
app.use("/admin", adminRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);

export default app;
