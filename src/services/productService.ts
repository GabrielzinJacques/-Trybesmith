import ProductModel from '../models/productModel';
import { IProduct } from '../interfaces/productInterface';

export default class ProductService {
  private model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const results = await this.model.getAll();
    return results;
  };
}