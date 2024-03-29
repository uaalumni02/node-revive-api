import * as Response from "../helpers/response/response";
import Errors from "../helpers/constants/constants";
import validator from "../validator/colors";
import Query from "../database/queries/colors";

class ColorController {
  static async addColorData(req, res) {
    const colorData = { ...req.body };
    try {
      const { error } = validator.validate(colorData);
      if (error) {
        return Response.responseBadRequest(res, Errors.VALIDATION);
      }
      const colorInfo = await Query.addColor(colorData);
      return Response.responseOkCreated(res, colorInfo);
    } catch (err) {
      return Response.responseServerError(res);
    }
  }
  static async getAllColors(req, res) {
    try {
      const getAllColors = await Query.getColors(req);
      return Response.responseOk(res, getAllColors);
    } catch (error) {
      return Response.responseServerError(res);
      ß;
    }
  }
  static async getColorById(req, res) {
    const { color_id } = req.params;
    try {
      const { error } = validator.validate({ color_id });
      if (error) {
        console.log(error)
        return Response.responseValidationError(res, Errors.INVALID_ID);
      }
      const colorById = await Query.colorById(color_id);
      return colorById.length == 0
        ? Response.responseNotFound(res, Errors.INVALID_BRAND)
        : Response.responseOk(res, colorById);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default ColorController;
