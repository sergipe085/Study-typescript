import { Request, Response } from 'express';

export function a(req: Request, res: Response) {
  return res.json({ message: 'ueslei jei' });
}