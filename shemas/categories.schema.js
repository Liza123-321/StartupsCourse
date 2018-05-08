import Joi from 'joi';

export default {
    id: Joi.number(),
    categoryName: Joi.string().min(3)
};
