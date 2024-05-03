import { Request, Response } from 'express';
import Profile from '../models/Profile';

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const profile = await Profile.findOne({});
    if (profile) res.json(profile);
    else res.status(404).json({ message: 'Profile not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: error instanceof Error ? error.message : 'Error' });
  }
};
