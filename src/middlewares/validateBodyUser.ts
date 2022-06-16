import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { IUser } from '../interfaces/userInterface';

const schemaBody = Joi.object({
  username: Joi.required(),
  classe: Joi.required(),
  level: Joi.required(),
  password: Joi.required(),

});

const schemaValues = Joi.object({
  username: Joi.string().min(3),
  classe: Joi.string().min(3),
  level: Joi.number().min(1),
  password: Joi.string().min(8),
});

export default class {
  private schemaBody = schemaBody;

  private schemaValues = schemaValues;

  public validateBody = (req: Request, res: Response, next: NextFunction): void => {
    const { username, classe, level, password } = req.body as IUser;
    const { error } = this.schemaBody.validate({ username, classe, level, password });
    if (error) next({ status: 400, message: error.message });
    next();
  };

  public validateValues = (req: Request, res: Response, next: NextFunction): void => {
    const { username, classe, level, password } = req.body as IUser;
    const { error } = this.schemaValues.validate({ username, classe, level, password });
    if (error) next({ status: 422, message: error.message });
    next();
  };
}