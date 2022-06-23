import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  private service = new OrdersService();

  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const orders = await this.service.getAll();
    return res.status(StatusCodes.OK).json(orders); 
  };
}