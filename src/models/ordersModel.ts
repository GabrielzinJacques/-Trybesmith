import { ResultSetHeader, RowDataPacket } from "mysql2";
import { IOrders } from "../interfaces/ordersInterface";
import connection from "./connection";

export default class OrdersModel {
  public getOrders = async () => {
    const [results] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Orders',
    );
    return results;
  }
}