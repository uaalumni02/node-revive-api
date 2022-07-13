import express from "express";
import colorController from "../controllers/colors";

const router = express.Router();

router.route("/").post(colorController.addColorData);
router.route("/").get(colorController.getAllColors);

export default router;