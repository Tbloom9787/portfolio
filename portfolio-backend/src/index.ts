import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import cors from 'cors';
import homeRouter from './routes/home';
import profileRouter from './routes/profile';
import milestonesRouter from './routes/milestones';
import projectsRouter from './routes/projects';
import emailRouter from './routes/email';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI!;

app.use(express.json());
app.use(cors());

app.use('/api', homeRouter);
app.use('/api', profileRouter);
app.use('/api', milestonesRouter);
app.use('/api', projectsRouter);
app.use('/api', emailRouter);

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 3,
  message: 'Too many requests from this IP, please try again after 24 hours',
});

app.use('/api/send-email', limiter);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
  });

app.get('/', (req, res) => {
  res.send('Hello from the backend of my portfolio!');
});
