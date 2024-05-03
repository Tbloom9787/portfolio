import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import milestonesRouter from './routes/milestones';

const app = express();
const PORT = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI!;

app.use(express.json());
app.use(cors());
app.use('/api', milestonesRouter);

mongoose.connect(mongoURI)
.then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('MongoDB connection failed:', err.message);
});

app.get('/', (req, res) => {
    res.send('Hello from the backend of my portfolio!');
});
