"use strict";
// src/controllers/userController.ts
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
exports.getUserByIdHandler = exports.getAllUsersHandler = void 0;
const userService_1 = require("../services/userService");
const getAllUsersHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsers)();
        reply.send(users);
    }
    catch (error) {
        reply.status(500).send({ error: 'Internal Server Error', err: error });
    }
});
exports.getAllUsersHandler = getAllUsersHandler;
const getUserByIdHandler = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        console.log(id);
        const user = yield (0, userService_1.getUserById)(id);
        if (!user) {
            reply.status(404).send({ error: 'User not found' });
            return;
        }
        reply.send(user);
    }
    catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
});
exports.getUserByIdHandler = getUserByIdHandler;
