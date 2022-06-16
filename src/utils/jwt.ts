import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterface';

export default class {
  private secret = 'PROJETINHOFELLA';

  private jwtConfig: jwt.SignOptions = {
    expiresIn: '5d',
    algorithm: 'HS256',
  };

  public encode = (data: Omit<IUser, 'password'>): string => {
    const token = jwt.sign({ data }, this.secret, this.jwtConfig);
    return token;
  };

  public decode = (token: string): JwtPayload => {
    const decoded = jwt.verify(token, this.secret);
    return decoded as JwtPayload;
  };
}