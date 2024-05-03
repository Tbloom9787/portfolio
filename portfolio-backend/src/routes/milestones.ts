import express from 'express';
import Milestone from '../models/Milestone';

const router = express.Router();

router.get('/milestones', async (req, res) => {
    try {
        const milestones = await Milestone.find({});
        res.json(milestones);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});

export default router;
