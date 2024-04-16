import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import { createAlert, getAlert } from "../controllers/alertController.js";

router.route("/create").get(protect, createAlert);

export default router;
