import express from "express";
import brandController from "../controllers/brands";

const router = express.Router();

router.route("/").post(brandController.addBrandData);

export default router;
