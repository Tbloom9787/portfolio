import { Request, Response } from 'express';
import Milestone from '../models/Milestone';

export const getAllMilestones = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const milestones = await Milestone.find({});
    res.json(milestones);
  } catch (error) {
    res
      .status(500)
      .json({ message: error instanceof Error ? error.message : 'Error' });
  }
};
