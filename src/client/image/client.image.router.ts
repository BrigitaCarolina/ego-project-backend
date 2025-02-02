import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import multer from "multer";

import * as ClientImageService from "./client.image.service";
import { errorResponse, successResponse } from "../../../util/response/response.util";

export const clientImageRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() }); 

clientImageRouter.post("/", 
    upload.single("image"),
    async(req: Request, res: Response, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            errorResponse(res, { message: errors.array()[0].msg }, 400);
        }
        try {
            if (!req.file) {
                errorResponse(res, { message: "Please provide an image to be uploaded" }, 400);
            }

            const image = req.file as Express.Multer.File;
            const newImage = await ClientImageService.addClientImage(image);
            successResponse(res, newImage, undefined, 201);
        } catch(err: any) {
            next(err);
        }
    }
);
