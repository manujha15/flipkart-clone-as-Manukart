import express from "express";
import { getUserProfile, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", getUserProfile);
router.post("/register", registerUser);

export default router;
