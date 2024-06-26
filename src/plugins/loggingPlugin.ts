// src/plugins/loggingPlugin.ts

import { FastifyInstance, FastifyPluginCallback } from 'fastify';

const loggingPlugin: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.addHook('onRequest', (request, reply, next) => {
        // Exemplo simples de logging
        console.log(`[${new Date().toISOString()}] ${request.method} ${request.url}`);
        next();
    });

    done();
};

export default loggingPlugin;
