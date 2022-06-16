import connection from './connection';
import { IProduct } from '../interfaces/productInterface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [result] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return result as IProduct[];
  };
}
