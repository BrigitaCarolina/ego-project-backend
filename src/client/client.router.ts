import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as ClientService from "./client.service";

export const clientRouter = express.Router();
clientRouter.get("/", async(req: Request, res: Response) => {
    try {
        const clients = await ClientService.listClients();
        res.json(clients);
    } catch(error: any) {
        res.status(500).json(error.message);
    }
})


// GET: A single client with ID
clientRouter.get("/:id", async(req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    try {
        const client = await ClientService.getClient(id);
        if (client) {
            res.json(client);
        } 
        res.status(404).json("Client not found");
    } catch(error: any) {
        res.status(500).json(error.message);
    }
})

// POST: Create a new client 
clientRouter.post("/", 
    body("name").isString().notEmpty(),
    async(req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        }
        try {
            const client = req.body;
            const newClient = await ClientService.createClient(client);
            res.status(201).json({
                success: true,
                data: newClient
            });
        } catch(error: any) {
            res.status(500).json(error.message);
        }
    }
);
