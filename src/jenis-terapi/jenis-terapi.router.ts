import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as JenisTerapiService from "./jenis-terapi.service";
import { errorResponse, successResponse } from "../../util/response/response.util";
export const jenisTerapiRouter = express.Router();

jenisTerapiRouter.get("/", 
    body("id").isInt().notEmpty(),
    async(req: Request, res: Response, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorResponse(res, errors.array(), 400);
        }
        try {
            const jenisTerapis = await JenisTerapiService.getJenisTerapi();
            successResponse(res, jenisTerapis);
        } catch(err: any) {
            next(err);
        }
    }
);
