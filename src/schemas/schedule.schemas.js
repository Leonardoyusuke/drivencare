import joi from "joi";
import JoiDateFactory from "@joi/date";

export const appointmentSchema = joi.object({
  doctorsId: joi.required(),
  consultDate: joi.required(),
  consultTime: joi.required()
});
