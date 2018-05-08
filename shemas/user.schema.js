import Joi from 'joi';

export default {
    id: Joi.number(),
    userName: Joi.string().min(1),
    email: Joi.string().email(),
    pass: Joi.string().min(1)
};
