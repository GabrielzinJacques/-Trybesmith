import ProductModel from '../models/productModel';
import { ICreate } from '../interfaces/productInterface';

export default class ProductService {
  private model = new ProductModel();

  public getAll = async () => {
    const results = await this.model.getAll();
    return results;
  };

  public create = async ({ name, amount }: ICreate) => {
    const newProduct = await this.model.create({ name, amount });
    return newProduct;
  };
}