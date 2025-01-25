import express from "express"; 
import type { Request, Response } from "express";

import * as TerapisService from "./terapis.service";
import { successResponse } from "../../util/response/response.util";

export const terapisRouter = express.Router();
terapisRouter.get("/", async(req: Request, res: Response, next) => {
    try {
        const terapis = await TerapisService.listTerapis();
        successResponse(res, terapis);
    } catch(err: any) {
        next(err);
    }
})

terapisRouter.get("/jenis-terapi/:id", async(req: Request, res: Response, next) => {
    try {
        const terapis = await TerapisService.getTerapisByJenisTerapiId(parseInt(req.params.id));
        successResponse(res, terapis);
    } catch(err: any) {
        next(err);
    }
})