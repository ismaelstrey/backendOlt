// src/app.ts

import fastify, { FastifyInstance } from 'fastify';
import loggingPlugin from './plugins/loggingPlugin';
import userRoutes from './routes/userRoutes';

const createApp = async (): Promise<FastifyInstance> => {
    const app: FastifyInstance = fastify({ logger: true });

    // Registrar plugin de logging
    app.register(loggingPlugin);

    // Registrar rotas
    app.register(userRoutes);

    return app;
};

export default createApp;
