import { Router } from "express";

import authRoutes from "./auth";
import textsRoutes from "./texts";
import productRoutes from "./product";

const rootRoute: Router = Router();

rootRoute.use("/auth", authRoutes);
rootRoute.use("/texts", textsRoutes);
rootRoute.use("/products", productRoutes);

export default rootRoute;
