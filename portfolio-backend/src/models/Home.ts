import mongoose from 'mongoose';

const HomeSchema = new mongoose.Schema({
  greeting: String,
  name: String,
  title: String,
  description: String,
  buttonText: String,
});

const Home = mongoose.model('Home', HomeSchema, 'home');
export default Home;