import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IUser } from '../interfaces/userInterface';

export default class UserModel {
  public create = async (user: IUser): Promise<IUser> => {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`, [user.username, user.classe, user.level, user.password]);
    return {
      id: insertId,
      username: user.username,
      classe: user.classe,
      level: user.level,
    };
  };
}
