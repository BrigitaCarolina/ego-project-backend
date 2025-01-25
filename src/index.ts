import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { clientRouter } from "./client/client.router";
import { terapisRouter } from "./terapis/terapis.router";
import { clientTherapyRouter } from "./client-therapy/client-therapy.router";
import { errorHandler } from "../util/middleware/error.middleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/clients", clientRouter);  
app.use("/api/terapis", terapisRouter);  
app.use("/api/client/therapy", clientTherapyRouter);  

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