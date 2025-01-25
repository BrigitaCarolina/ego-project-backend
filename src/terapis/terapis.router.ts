import express from "express"; 
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as TerapisService from "./terapis.service";

export const terapisRouter = express.Router();
terapisRouter.get("/", async(req: Request, res: Response) => {
    try {
        const terapis = await TerapisService.listTerapis();
        res.json({
            success: true,
            data: terapis
        });
    } catch(error: any) {
        res.status(500).json(error.message);
    }
})


// GET: A single client with ID
// terapisRouter.get("/:id", async(req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     try {
//         const client = await ClientService.getClient(id);
//         if (client) {
//             res.json(client);
//         } 
//         res.status(404).json("Client not found");
//     } catch(error: any) {
//         res.status(500).json(error.message);
//     }
// })

// // POST: Create a new client 
// terapisRouter.post("/", 
//     body("name").isString().notEmpty(),
//     async(req: Request, res: Response) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             res.status(400).json({ errors: errors.array() });
//         }
//         try {
//             const client = req.body;
//             const newClient = await ClientService.createClient(client);
//             res.status(201).json(newClient);
//         } catch(error: any) {
//             res.status(500).json(error.message);
//         }
//     }
// );
