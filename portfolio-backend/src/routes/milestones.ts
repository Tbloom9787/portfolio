import express from 'express';
import { getAllMilestones } from '../controllers/milestonesController';

const router = express.Router();

router.get('/milestones', getAllMilestones);

export default router;
