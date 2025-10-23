import { Router } from "express";

import { login, signUp } from "../controllers/auth";
import { errorHandler } from "../utils/error_handler";

const authRoutes: Router = Router();

authRoutes.post("/login", errorHandler(login));
authRoutes.post("/signup", errorHandler(signUp));

export default authRoutes;
