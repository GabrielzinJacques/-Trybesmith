import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProduct, ICreate } from '../interfaces/productInterface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [results] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return results as IProduct[];
  };

  public create = async (product: ICreate): Promise<Omit<IProduct, 'orderId'>> => {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`, [product.name, product.amount]);
    return {
      id: insertId,
      name: product.name,
      amount: product.amount,
    };
  };
}
