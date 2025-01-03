import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  getNotifications,
  deleteNotifications,
} from "../controllers/notification.controller.js";

const router = express.Router();

export default router;

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
