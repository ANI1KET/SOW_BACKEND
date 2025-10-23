"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const server_1 = require("../server");
const getProducts = async (req, res, next) => {
    const response = await server_1.prismaClient.pricelist.findMany();
    res.status(200).json(response);
};
exports.getProducts = getProducts;
