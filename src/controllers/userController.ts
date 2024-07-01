// src/controllers/userController.ts

import { FastifyRequest, FastifyReply } from "fastify";
import { createUser, getAllUsers, getUserById } from "../services/userService";
import { User } from "models/user";

export const getAllUsersHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const users = await getAllUsers();

    reply.send(users);
  } catch (error) {
    reply.status(500).send({ error: "Internal Server Error", err: error });
  }
};

export const getUserByIdHandler = async (
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const id = Number(request.params.id);
    const user = await getUserById(id);
    if (!user) {
      reply.status(404).send({ error: "User not found" });
      return;
    }
    reply.send(user);
  } catch (error) {
    reply.status(500).send({ error: "Internal Server Error" });
  }
};

// Request handler function
export const postUserHandler = async (
  request: FastifyRequest<{ Body: User }>,
  reply: FastifyReply
) => {
  try {
    // Assuming request.body contains user data
    const { body } = request;

    await createUser({ ...body });
  } catch (error) {
    console.error("Error creating user:", error);
    reply.status(500).send({ error: "Internal Server Error" });
  }
};
