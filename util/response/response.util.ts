import { Response } from "express";

export const successResponse = (res: Response, data: any, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message
    });
}

export const errorResponse = (res: Response, error: any, statusCode = 500) => {
    const message = error.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        message,
        error: process.env.NODE_ENV === "development" ? error : undefined
    });
}