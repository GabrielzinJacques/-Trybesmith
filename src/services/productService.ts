import ProductModel from '../models/productModel';
import { ICreate, IProduct } from '../interfaces/productInterface';

export default class ProductService {
  private model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const results = await this.model.getAll();
    return results;
  };

  public create = async ({ name, amount }: ICreate): Promise<Omit<IProduct, 'orderId'>> => {
    const newProduct = await this.model.create({ name, amount });
    return newProduct;
  };
}