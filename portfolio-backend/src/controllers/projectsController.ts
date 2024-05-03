import { Request, Response } from 'express';
import Project from '../models/Project';

export const getAllProjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'Server Error',
    });
  }
};
