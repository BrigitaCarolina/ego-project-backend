import { ErrorRequestHandler } from "express";
import { errorResponse } from "../response/response.util";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    errorResponse(res, err, 500);
}