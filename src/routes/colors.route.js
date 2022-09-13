import express from "express";
import colorController from "../controllers/colors";

const router = express.Router();

router
  .route("/:color_id")
  //   .delete(checkAuth, movieController.deleteMovie)
  //   .patch(checkAuth, movieController.updateMovie)
  .get(colorController.getColorById);

router.route("/").post(colorController.addColorData);
router.route("/").get(colorController.getAllColors);

export default router;
