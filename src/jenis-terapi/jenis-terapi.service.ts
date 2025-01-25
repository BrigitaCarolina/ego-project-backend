import { ClientTherapy, JenisTerapi } from "@prisma/client";
import { db } from "../utils/db.server";


export const getJenisTerapi = async (): Promise<JenisTerapi[] | null> => {
    return await db.jenisTerapi.findMany();
}

export const getTerapisByJenisTerapiId = async (id: number): Promise<JenisTerapi | null> => {
    return await db.jenisTerapi.findUnique({
        where: {
            id: id
        }
    })
}