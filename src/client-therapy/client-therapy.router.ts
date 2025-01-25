import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as ClientTherapyService from "./client-therapy.service";
export const clientTherapyRouter = express.Router();

clientTherapyRouter.post("/", 
    async(req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }
        try {
            const clientTherapy = req.body;
            const newClientTherapy = await ClientTherapyService.createClientTherapy(clientTherapy);
            res.status(201).json({
                success: true,
                data: newClientTherapy
            });
        } catch(error: any) {
            res.status(500).json(error.message);
        }
    }
);
