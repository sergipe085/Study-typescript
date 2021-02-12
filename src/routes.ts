import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function a(req: Request, res: Response) {
  const user = createUser({email: 'dapscreed@gmail.com', password: 'coxinha2004', techs: [
    'Pao',
    'Melancia',
    'Maca',
    { nome: 'Banana', data: '14/10/2021' }
  ]});

  return res.json(user);
}