import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const schemaBody = Joi.object({
  name: Joi.required(),
  amount: Joi.required(),
});

const schemaValues = Joi.object({
  name: Joi.string().min(3),
  amount: Joi.string().min(3),
});

export default class {
  private schemaBody = schemaBody;

  private schemaValues = schemaValues;

  public validateBody = (req: Request, res: Response, next: NextFunction): void => {
    const { name, amount } = req.body;
    const { error } = this.schemaBody.validate({ name, amount });
    if (error) next({ status: 400, message: error.message });
    next();
  };

  public validateValues = (req: Request, res: Response, next: NextFunction): void => {
    const { name, amount } = req.body;
    const { error } = this.schemaValues.validate({ name, amount });
    if (error) next({ status: 422, message: error.message });
    next();
  };
}