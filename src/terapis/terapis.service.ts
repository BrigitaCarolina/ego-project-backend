import { Terapis } from "@prisma/client";
import { db } from "../utils/db.server";

export const listTerapis = async (): Promise<Terapis[]> => {
    return await db.terapis.findMany();
}

export const getTerapis = async (id: number): Promise<Terapis | null> => {
    return await db.terapis.findUnique({
        where: {
            id
        }
    })
}

export const getTerapisByJenisTerapiId = async (jenisTerapiId: number): Promise<Terapis[] | null> => {
    return await db.terapis.findMany({
        where: {
            jenisTerapiId: jenisTerapiId
        }
    })
}

export const createClient = async (terapis: Terapis): Promise<Terapis> => {
    return await db.terapis.create({
        data: terapis
    })
}