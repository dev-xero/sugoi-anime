import { Schema, model } from 'mongoose'
import UserModelInterface from './user.model.interface'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    googleID: {
      type: String,
      required: true,
      unique: true,
    },
    secret: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
)

const User = model<UserModelInterface>('User', UserSchema)

export default User
