// src/controllers/userController.ts

import { FastifyRequest, FastifyReply } from 'fastify';
import { getAllUsers, getUserById } from '../services/userService';

export const getAllUsersHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    try {
        const users = await getAllUsers();

        reply.send(users);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error', err: error });
    }
};

export const getUserByIdHandler = async (
    request: FastifyRequest<{ Params: { id: number } }>,
    reply: FastifyReply
) => {
    try {
        const id = request.params.id;
        console.log(id)
        const user = await getUserById(id);
        if (!user) {
            reply.status(404).send({ error: 'User not found' });
            return;
        }
        reply.send(user);
    } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
};
