import { Router } from "express";

import { getTexts } from "../controllers/texts";
import { errorHandler } from "../utils/error_handler";

const textsRoutes: Router = Router();

textsRoutes.get("/:page/:language", errorHandler(getTexts));

export default textsRoutes;
