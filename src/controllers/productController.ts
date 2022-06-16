import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  private service = new ProductService();
  
  public getAll = async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
    const products = await this.service.getAll();
    return res.status(StatusCodes.OK).json(products);
  }; 
}