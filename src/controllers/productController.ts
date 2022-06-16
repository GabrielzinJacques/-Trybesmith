import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productService';
import { IProduct } from '../interfaces/productInterface';

export default class ProductController {
  private service = new ProductService();
  
  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  }; 

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<Omit<IProduct, 'orderId'>> | void> => {
    const { name, amount } = req.body;
    try {
      const newProduct = await this.service.create({ name, amount });
      return res.status(StatusCodes.CREATED).json(newProduct);
    } catch (error) {
      next(error);
    }
  }; 
}