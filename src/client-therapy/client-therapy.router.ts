import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as ClientTherapyService from "./client-therapy.service";
import { errorResponse, successResponse } from "../../util/response/response.util";
export const clientTherapyRouter = express.Router();

clientTherapyRouter.post("/", 
    async(req: Request, res: Response, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorResponse(res, errors.array(), 400);
        }
        try {
            const clientTherapy = req.body;
            const newClientTherapy = await ClientTherapyService.createClientTherapy(clientTherapy);
            successResponse(res, newClientTherapy, undefined, 201);
        } catch(err: any) {
            next(err);
        }
    }
);
