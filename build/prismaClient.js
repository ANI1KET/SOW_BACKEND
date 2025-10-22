"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
exports.prismaClient = global.prisma ||
    new client_1.PrismaClient({
        log: ["query", "info", "warn", "error"],
    });
if (process.env.NODE_ENV !== "production")
    global.prisma = exports.prismaClient;
