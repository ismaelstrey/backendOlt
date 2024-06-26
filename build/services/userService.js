"use strict";
// src/services/userService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUsers = void 0;
const prisma_1 = require("../prisma");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.prisma.usuario.findMany({
        select: { nome: true, email: true, id: true }
    });
    console.log(Object.assign({ name: "Strey" }, data));
    return data;
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.prisma.usuario.findFirst({
        where: { id: id },
        select: { nome: true, email: true, id: true }
    });
});
exports.getUserById = getUserById;
