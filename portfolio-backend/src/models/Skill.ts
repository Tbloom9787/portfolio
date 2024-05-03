import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: String,
  experience: Number,
  icon: String,
});

export default SkillSchema;
