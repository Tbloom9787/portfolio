import express from 'express';
import { getAllProjects } from '../controllers/projectsController';

const router = express.Router();

router.get('/projects', getAllProjects);

export default router;
