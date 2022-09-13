import express from "express";
import brandController from "../controllers/brands";

const router = express.Router();

router
  .route("/:brand_id")
//   .delete(checkAuth, movieController.deleteMovie)
//   .patch(checkAuth, movieController.updateMovie)
  .get(brandController.getBrandById);

router.route("/").post(brandController.addBrandData);
router.route("/").get(brandController.getAllBrands);

export default router;
