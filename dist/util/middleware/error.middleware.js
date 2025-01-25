"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const response_util_1 = require("../response/response.util");
const errorHandler = (err, req, res, next) => {
    console.error(err);
    (0, response_util_1.errorResponse)(res, err, 500);
};
exports.errorHandler = errorHandler;
