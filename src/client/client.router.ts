import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as ClientService from "./client.service";
import { errorResponse, successResponse } from "../../util/response/response.util";

export const clientRouter = express.Router();
clientRouter.get("/", async(req: Request, res: Response, next) => {
    try {
        const clients = await ClientService.listClients();
        successResponse(res, clients);
    } catch(err: any) {
        next(err);
    }
})

clientRouter.get("/:id", async(req: Request, res: Response, next) => {
    const id: number = parseInt(req.params.id);
    try {
        const client = await ClientService.getClient(id);
        if (client) {
            successResponse(res, client);
        } 
        errorResponse(res, { message: "Client not found" }, 404);
    } catch(err: any) {
        next(err);
    }
})

clientRouter.post("/", 
    body("name").isString().notEmpty(),
    async(req: Request, res: Response, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorResponse(res, errors.array(), 400);
        }
        try {
            const client = req.body;
            const newClient = await ClientService.createClient(client);
            successResponse(res, newClient, undefined, 201);
        } catch(err: any) {
            next(err);
        }
    }
);
