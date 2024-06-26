"use strict";
// src/app.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const loggingPlugin_1 = __importDefault(require("./plugins/loggingPlugin"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const createApp = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, fastify_1.default)({ logger: true });
    // Registrar plugin de logging
    app.register(loggingPlugin_1.default);
    // Registrar rotas
    app.register(userRoutes_1.default);
    return app;
});
exports.default = createApp;
