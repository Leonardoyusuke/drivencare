import Joi from "joi";

export const historicSchema = Joi.object({
    usersId: Joi.number().required(),
  });