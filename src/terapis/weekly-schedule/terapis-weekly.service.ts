import { Weekly } from "@prisma/client";
import { db } from "../../utils/db.server";

export const addWeeklySchedule = async (weekly: Weekly): Promise<Weekly> => {
    return await db.weekly.create({
        data: weekly
    })
}

export const getWeeklySchedule = async (terapisId: number): Promise<Weekly[]> => {
    return await db.weekly.findMany({
        where: {
            terapisId
        }
    })
}