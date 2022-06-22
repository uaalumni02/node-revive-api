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
}

export default ColorController;
