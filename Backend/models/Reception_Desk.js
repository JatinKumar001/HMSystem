import mongoose from "mongoose";

const Appointment = new mongoose.Schema({
    sap: {
        type: String,
        require: true,
    },
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    },
    age: {
        type: String,
        require: true,
    },
    preference: {
        type: String,
        require: true,
    },
    description:{
        type: String,
    },
    appstatus:{
        type: String,
    }
},
{ timestamps: true }
);

export default mongoose.model("Appointment", Appointment);