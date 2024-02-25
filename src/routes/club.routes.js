import { Router } from "express";
import { verifyPermission, verifyToken } from "../middlewares/authJwt.js";
import { createClub, getClub, getClubs, updateClub } from "../controllers/club.controller.js";

const router = Router();

router.get("/", [verifyToken, verifyPermission], getClubs);
router.get("/:id", [verifyToken, verifyPermission], getClub);
router.post("/", [verifyToken, verifyPermission], createClub);
router.put("/:id", [verifyToken, verifyPermission], updateClub);

export default router;