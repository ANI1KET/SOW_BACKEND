"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const texts_1 = require("../controllers/texts");
const error_handler_1 = require("../utils/error_handler");
const textsRoutes = (0, express_1.Router)();
textsRoutes.get("/", (0, error_handler_1.errorHandler)(texts_1.getTexts));
exports.default = textsRoutes;
