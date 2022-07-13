const Joi = require("@hapi/joi");

const schema = Joi.object({
  brand_name: Joi.string().min(3).max(10),
  //   required()
  brand_id: Joi.number(),
});
export default schema;