const Joi = require("joi");

const schema = Joi.object({
  id: Joi.number().required(),
  categories: Joi.string().alphanum().max(30).required(),
  weight: Joi.number().required(),
  title: Joi.string().max(30).required(),
  calories: Joi.number().required(),
});

exports.module = schema;

// schema.validate({});
// // -> { value: {}, error: '"username" is required' }

// // Also -

// try {
//   const value = await schema.validateAsync({
//     username: "abc",
//     birth_year: 1994,
//   });
// } catch (err) {}
