"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducts = exports.getProducts = void 0;
const server_1 = require("../server");
const getProducts = async (req, res, next) => {
    const response = await server_1.prismaClient.pricelist.findMany();
    res.status(200).json(response);
};
exports.getProducts = getProducts;
const updateProducts = async (req, res, next) => {
    const { productId } = req.params;
    const updates = req.body;
    await server_1.prismaClient.pricelist.update({
        where: { id: productId },
        data: updates,
    });
    res.status(200).json({ sucess: true });
};
exports.updateProducts = updateProducts;
