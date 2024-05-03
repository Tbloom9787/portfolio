import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI!;

app.use(express.json());

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
