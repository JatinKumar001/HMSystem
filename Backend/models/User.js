import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  sap: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: String,
  },
  stream: {
    type: String,
  },
  specialization: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    require: true,
  },
},
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);