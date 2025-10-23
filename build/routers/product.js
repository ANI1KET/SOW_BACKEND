"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_handler_1 = require("../utils/error_handler");
const product_1 = require("../controllers/product");
const productRoutes = (0, express_1.Router)();
productRoutes.get("/", (0, error_handler_1.errorHandler)(product_1.getProducts));
productRoutes.put("/:productId", (0, error_handler_1.errorHandler)(product_1.updateProducts));
exports.default = productRoutes;
