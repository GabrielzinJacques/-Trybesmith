import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';

export default class ProductController {
  private service = new UserService();

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { username, classe, level, password } = req.body;
    try {
      const token = await this.service.create({ username, classe, level, password });
      return res.status(StatusCodes.CREATED).json({ token });
    } catch (error) {
      next(error);
    }
  }; 
}