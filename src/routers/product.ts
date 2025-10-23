import { Router } from "express";

import { errorHandler } from "../utils/error_handler";
import { getProducts, updateProducts } from "../controllers/product";

const productRoutes: Router = Router();

productRoutes.get("/", errorHandler(getProducts));
productRoutes.put("/:productId", errorHandler(updateProducts));

export default productRoutes;
