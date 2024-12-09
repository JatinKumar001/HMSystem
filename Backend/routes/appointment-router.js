import express from "express"
import { createAppointment, deleteAppointment, getallAppointment, getAppointment, reAppointment, updateAppointment } from "../controllers/appointment-controller.js";

const router = express.Router();

router.post("/", createAppointment);
router.post("/:id", reAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);
router.get("/:id", getAppointment);
router.get("/", getallAppointment);

export default router