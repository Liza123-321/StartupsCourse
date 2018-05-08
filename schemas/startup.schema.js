import Joi from 'joi';

export default {
    id: Joi.number(),
    projectName: Joi.string().min(3),
    projectDescription: Joi.string().min(10),
    projectStatus: Joi.string().min(3),
    IdCreator: Joi.number()
};
