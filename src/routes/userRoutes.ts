// src/routes/userRoutes.ts

import { FastifyInstance } from 'fastify';
import { getAllUsersHandler, getUserByIdHandler } from '../controllers/userController';

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.get('/users', getAllUsersHandler);
    fastify.get('/users/:id', getUserByIdHandler);
};

export default userRoutes;
