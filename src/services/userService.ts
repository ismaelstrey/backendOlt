// src/services/userService.ts

import { prisma } from '../prisma';
import { User } from '../models/user';

export const getAllUsers = async (): Promise<User[]> => {


    const data = await prisma.usuario.findMany({
        select: { id: true, nome: true, email: true }
    })

    return data
}

export const getUserById = async (id: number): Promise<User | null> => await prisma.usuario.findFirst(
    {
        where: { id: id },
        select: { nome: true, email: true, id: true }
    }
)
