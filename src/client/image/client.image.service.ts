import path from "path";
import fs from "fs/promises";

export const addClientImage = async (image: Express.Multer.File): Promise<String> => {
    const uploadDir = path.join(process.cwd(), "/uploads");
    await fs.mkdir(uploadDir, { recursive: true }); 

    const timestamp = new Date().getTime();
    const uniqueFilename = `${timestamp}-${image.originalname}`;
    const filePath = path.join(uploadDir, uniqueFilename);

    const arrayBuffer = image.buffer;
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filePath, buffer); 

    return uniqueFilename;
}