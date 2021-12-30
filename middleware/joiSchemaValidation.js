const joi = require('@hapi/joi');
const { schema } = require('../database/models/productModel');

const validateObjectSchema = (data, schema) => {
    const result = joi.validate(data, schema);
    console.log('Joi Schema Validateion Result =', result);
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        validateObjectSchema(req.body, schema);
    }
}