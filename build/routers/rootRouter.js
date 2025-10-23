"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const texts_1 = __importDefault(require("./texts"));
const product_1 = __importDefault(require("./product"));
const rootRoute = (0, express_1.Router)();
rootRoute.use("/auth", auth_1.default);
rootRoute.use("/texts", texts_1.default);
rootRoute.use("/products", product_1.default);
exports.default = rootRoute;
