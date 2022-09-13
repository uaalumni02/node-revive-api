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
  static async getAllBrands(req, res) {
    try {
      const getAllBrands = await Query.getBrands(req);
      return Response.responseOk(res, getAllBrands);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getBrandById(req, res) {
    const { brand_id } = req.params;
    try {
      const { error } = validator.validate({ brand_id });
      if (error) {
        return Response.responseValidationError(res, Errors.INVALID_ID);
      }
      const brandById = await Query.brandById(brand_id);
      return brandById.length == 0
        ? Response.responseNotFound(res, Errors.INVALID_BRAND)
        : Response.responseOk(res, brandById);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default BrandController;
