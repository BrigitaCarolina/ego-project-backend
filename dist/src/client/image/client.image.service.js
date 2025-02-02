"use strict";
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
exports.addClientImage = void 0;
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const addClientImage = (image) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadDir = path_1.default.join(process.cwd(), "/uploads");
    yield promises_1.default.mkdir(uploadDir, { recursive: true });
    const timestamp = new Date().getTime();
    const uniqueFilename = `${timestamp}-${image.originalname}`;
    const filePath = path_1.default.join(uploadDir, uniqueFilename);
    const arrayBuffer = image.buffer;
    const buffer = Buffer.from(arrayBuffer);
    yield promises_1.default.writeFile(filePath, buffer);
    return uniqueFilename;
});
exports.addClientImage = addClientImage;
