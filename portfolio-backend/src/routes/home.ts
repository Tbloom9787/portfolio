import express from 'express';
import { getHome } from '../controllers/homeController';

const router = express.Router();

router.get('/home', getHome);

export default router;
