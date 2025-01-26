"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const client_router_1 = require("./client/client.router");
const terapis_router_1 = require("./terapis/terapis.router");
const client_therapy_router_1 = require("./client-therapy/client-therapy.router");
const error_middleware_1 = require("../util/middleware/error.middleware");
const response_util_1 = require("../util/response/response.util");
const jenis_terapi_router_1 = require("./jenis-terapi/jenis-terapi.router");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/clients", client_router_1.clientRouter);
app.use("/api/terapis", terapis_router_1.terapisRouter);
app.use("/api/jenis-terapi", jenis_terapi_router_1.jenisTerapiRouter);
app.use("/api/client/therapy", client_therapy_router_1.clientTherapyRouter);
app.use((req, res, next) => {
    (0, response_util_1.errorResponse)(res, { message: "Not found" }, 404);
});
app.get('/', (req, res) => {
    res.send('Test!');
});
app.use(error_middleware_1.errorHandler);
const server = app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
process.on("SIGINT", () => {
    console.log("Shutting down server...");
    server.close(() => {
        console.log("Server is shut down");
        process.exit(0);
    });
});
