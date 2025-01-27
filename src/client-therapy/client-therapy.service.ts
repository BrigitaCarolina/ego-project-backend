import { ClientTherapy } from "@prisma/client";
import { db } from "../utils/db.server";

export const createClientTherapy = async (clientTherapy: ClientTherapy[]): Promise<{ count: number}> => {
    return await db.clientTherapy.createMany({
        data: clientTherapy
    })
}