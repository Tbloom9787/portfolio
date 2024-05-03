import mongoose from 'mongoose';
import SkillSchema from './Skill';

const ProfileSchema = new mongoose.Schema({
  introduction: String,
  bio: String,
  profileImage: String,
  coreSkills: [SkillSchema],
  otherSkills: [String],
});

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
