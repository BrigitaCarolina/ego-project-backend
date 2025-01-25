import { Client } from "@prisma/client";
import { db } from "../utils/db.server";

export const listClients = async (): Promise<Client[]> => {
    return await db.client.findMany();
}

export const getClient = async (id: number): Promise<Client | null> => {
    return await db.client.findUnique({
        where: {
            id: id
        }
    })
}

export const createClient = async (client: Client): Promise<Client> => {
    return await db.client.create({
        data: client
    })
}