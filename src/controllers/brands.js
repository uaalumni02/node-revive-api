import * as Response from "../helpers/response/response";
import Errors from "../helpers/constants/constants";
import validator from "../validator/brands";
import Query from "../database/queries/brands";

class BrandController {
  static async addBrandData(req, res) {
    const brandData = { ...req.body };
    try {
      const { error } = validator.validate(brandData);
      if (error) {
        return Response.responseBadRequest(res, Errors.VALIDATION);
      }
      const brandInfo = await Query.addBrand(brandData);
      return Response.responseOkCreated(res, brandInfo);
    } catch (err) {
      return Response.responseServerError(res);
    }
  }
}

export default BrandController;
