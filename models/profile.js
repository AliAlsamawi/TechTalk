import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: {
    type: String,
    required: true
  },
  github: {
    type: String,
    default: null
  },
  linkedin: {
    type: String,
    default: null
  },
  bio: {
    type: String,
    default: null
  },
  
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
