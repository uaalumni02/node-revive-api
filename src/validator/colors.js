const Joi = require("@hapi/joi");

const schema = Joi.object({
  color: Joi.string().min(3).max(10),
  //   required()
  id: Joi.number(),
});
export default schema;