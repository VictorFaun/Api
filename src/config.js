import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/adminclub";
export const PORT = process.env.PORT || 4000;
export const SECRET = process.env.SECRET || "asdlkjsa785aslkjsad6";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";
export const ADMIN_NAME = process.env.ADMIN_NAME || "admin";
export const ADMIN_LAST_NAME = process.env.ADMIN_LAST_NAME || "admin";
export const ADMIN_RUT = process.env.ADMIN_RUT || "11111111-1";