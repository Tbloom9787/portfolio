import { Request, Response } from 'express';
import Home from '../models/Home';

export const getHome = async (req: Request, res: Response): Promise<void> => {
  try {
    const home = await Home.findOne({});
    if (home) res.json(home);
    else res.status(404).json({ message: 'Home not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: error instanceof Error ? error.message : 'Error' });
  }
};
