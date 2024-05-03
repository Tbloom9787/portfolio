import mongoose from 'mongoose';

const MilestoneSchema = new mongoose.Schema({
  logo: String,
  company: String,
  companyInitials: String,
  title: String,
  period: String,
  description: String
});

const Milestone = mongoose.model('Milestone', MilestoneSchema);
export default Milestone;
