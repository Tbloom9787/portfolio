import mongoose from 'mongoose';
import SkillSchema from './Skill';

const ProfileSchema = new mongoose.Schema({
  introduction: String,
  bio: String,
  coreSkills: [SkillSchema],
  otherSkills: [String],
});

const Profile = mongoose.model('Profile', ProfileSchema, 'profile');
export default Profile;
