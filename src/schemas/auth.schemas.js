import joi from "joi";

export const singUpSchema = joi.object({
  name: joi.string().max(50).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref('password'),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const singUpDoctorSchema = joi.object({
  name: joi.string().max(50).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref('password'),
  specialty: joi.string().required(),
  localization: joi.string().required(),
});