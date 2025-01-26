import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { clientRouter } from "./client/client.router";
import { terapisRouter } from "./terapis/terapis.router";
import { clientTherapyRouter } from "./client-therapy/client-therapy.router";
import { errorHandler } from "../util/middleware/error.middleware";
import { errorResponse } from "../util/response/response.util";
import { jenisTerapiRouter } from "./jenis-terapi/jenis-terapi.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRouter);  
app.use("/api/terapis", terapisRouter);  
app.use("/api/jenis-terapi", jenisTerapiRouter);
app.use("/api/client/therapy", clientTherapyRouter);  

app.use((req, res, next) => {
  errorResponse(res, { message: "Not found" }, 404);
})

app.get('/', (req: Request, res: Response) => {
  res.send('Test!');
});

app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server is shut down");
    process.exit(0);
  });
})