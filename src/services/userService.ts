// src/services/userService.ts
import { prisma } from '../prisma';
import { User } from '../models/user';
export const getAllUsers = async (): Promise<User[]> => await prisma.usuario.findMany(
    {
        select: { id: true, nome: true, email: true }
    }
)
// export const createUser = async (user: User): Promise<User> => {
//     try {
//         const createdUser = await prisma.usuario.create({
//             data: user,
//         })
//         return createdUser;
//     } catch (error: any) {
//         throw new Error(`Error creating user: ${error.message}`);
//     }
// };

export const getUserById = async (id: number): Promise<User | null> => await prisma.usuario.findFirst(
    {
        where: { id: id },
        select: { nome: true, email: true, id: true }
    }
)
