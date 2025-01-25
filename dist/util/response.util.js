"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (res, data, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message
    });
};
exports.successResponse = successResponse;
const errorResponse = (res, error, statusCode = 500) => {
    const message = error.message || "Internal server error";
    return res.status(statusCode).json({
        success: false,
        message,
        error: process.env.NODE_ENV === "development" ? error : undefined
    });
};
exports.errorResponse = errorResponse;
