// src/routes/userRoutes.ts

import { FastifyInstance } from "fastify";
import {
  getAllUsersHandler,
  getUserByIdHandler,
  postUserHandler,
} from "../controllers/userController";

const userRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/users", getAllUsersHandler);
  fastify.get("/user/:id", getUserByIdHandler);
  fastify.post("/users", postUserHandler);
};

export default userRoutes;
