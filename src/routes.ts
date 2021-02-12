import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function a(req: Request, res: Response) {
  const user = createUser({email: 'dapscreed@gmail.com', password: 'coxinha2004'});

  return res.json(user);
}