import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { ICreate } from '../interfaces/productInterface';

export default class ProductModel {
  public getAll = async () => {
    const [results] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return results;
  };

  public getByOrder = async (id: number) => {
    const [results] = await connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products WHERE orderId=?', [id]);
    return results;
  }; 

  public create = async (product: ICreate) => {
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
