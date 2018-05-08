import Joi from 'joi';

export default {
    id: Joi.number(),
    userWhomId: Joi.number(),
    projectId: Joi.number(),
    flag: Joi.string().min(3),
    inviteMessage: Joi.string().min(7)
};