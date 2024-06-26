"use strict";
// src/plugins/loggingPlugin.ts
Object.defineProperty(exports, "__esModule", { value: true });
const loggingPlugin = (fastify, opts, done) => {
    fastify.addHook('onRequest', (request, reply, next) => {
        // Exemplo simples de logging
        console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
        next();
    });
    done();
};
exports.default = loggingPlugin;
