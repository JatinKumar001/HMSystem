import mongoose, { Schema } from "mongoose";

const StudentSchema = new mongoose.Schema({
    sap: {
        type: String,
        required: true,
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'RDesk'
    }]
});

export default mongoose.model("Student", StudentSchema);