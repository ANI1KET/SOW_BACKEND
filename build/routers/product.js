"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const error_handler_1 = require("../utils/error_handler");
const productRoutes = (0, express_1.Router)();
productRoutes.get("/", (0, error_handler_1.errorHandler)(product_1.getProducts));
exports.default = productRoutes;
