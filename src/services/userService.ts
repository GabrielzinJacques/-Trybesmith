import UserModel from '../models/userModel';
import { IUser } from '../interfaces/userInterface';
import Jwt from '../utils/jwt';

export default class UserService {
  private model = new UserModel();

  private Jwt = new Jwt();

  public create = async (user : IUser): Promise<string> => {
    const newUser = await this.model.create(user);
    const token = this.Jwt.encode(newUser);
    return token;
  };
}