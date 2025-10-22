"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTexts = void 0;
const server_1 = require("../server");
const getTexts = async (req, res, next) => {
    const { page, language } = req.params;
    const response = await server_1.prismaClient.text.findMany({
        where: {
            page,
            language,
        },
    });
    res.status(200).json(response);
};
exports.getTexts = getTexts;
