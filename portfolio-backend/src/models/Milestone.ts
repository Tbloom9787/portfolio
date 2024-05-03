import mongoose from 'mongoose';

const MilestoneSchema = new mongoose.Schema({
  logo: { type: String, required: false },
  company: { type: String, required: true },
  companyInitials: { type: String, required: true },
  title: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true }
});

const Milestone = mongoose.model('Milestone', MilestoneSchema);
export default Milestone;
