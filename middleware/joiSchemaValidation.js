const joi = require('@hapi/joi');


const validateObjectSchema = (data, schema) => {
    const result = Joi.validate(data, schema);
    console.log('Joi Schema Validateion Result =', result);
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        validateObjectSchema(req.body, schema);
    }
}