import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { errorResponse, successResponse } from "../../../util/response/response.util";

import * as TerapisScheduleService from "./terapis-weekly.service";

export const terapisScheduleRouter = express.Router();

terapisScheduleRouter.post("/", 
    async(req: Request, res: Response, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorResponse(res, { message: errors.array()[0].msg }, 400);
        }
        try {
            const weekly = req.body;
            const newClient = await TerapisScheduleService.addWeeklySchedule(weekly);
            successResponse(res, newClient, undefined, 201);
        } catch(err: any) {
            next(err);
        }
    }
);

terapisScheduleRouter.get("/:terapisId",
    async (req: Request, res: Response, next) => {
        try {
            const terapisId = parseInt(req.params.terapisId);
            const weekly = await TerapisScheduleService.getWeeklySchedule(terapisId);
            successResponse(res, weekly);
        } catch (err: any) {
            next(err);
        }
    }
);

terapisScheduleRouter.delete("/",
    async (req: Request, res: Response, next) => {
        try {
            const id = req.body.id;
            const weekly = await TerapisScheduleService.deleteWeeklySchedule(id);
            successResponse(res, weekly);
        } catch (err: any) {
            next(err);
        }
    }
);