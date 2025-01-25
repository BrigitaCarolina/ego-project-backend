"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.terapisRouter = void 0;
const express_1 = __importDefault(require("express"));
const TerapisService = __importStar(require("./terapis.service"));
exports.terapisRouter = express_1.default.Router();
exports.terapisRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const terapis = yield TerapisService.listTerapis();
        res.json({
            success: true,
            data: terapis
        });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}));
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
