import { ClientTherapy } from "@prisma/client";
import { db } from "../utils/db.server";

export const createClientTherapy = async (clientTherapy: ClientTherapy): Promise<ClientTherapy> => {
    return await db.clientTherapy.create({
        data: clientTherapy
    })
}