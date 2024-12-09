import Appointment from '../models/Reception_Desk.js'
import Students from '../models/Students.js';

export const createAppointment = async (req, res, next) => {
    const newAppointment = new Appointment(req.body);

    try {
        const saveAppointment = await newAppointment.save()

        let student = await Students.findOne({ sap: req.body.sap });

        if (!student) {
            student = new Students({ sap: req.body.sap, appointments: [] });
        }

        student.appointments.push(saveAppointment._id);
        await student.save();

        res.status(200).json(saveAppointment)

    } catch (err) {
        next(err);
    }
}

export const reAppointment = async (req, res, next) => {
    try {
        const appointmentId = req.params.id;

        const appointment = await Appointment.findById(appointmentId);

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        const newAppointment = new Appointment({
            ...appointment.toObject(),
            _id: undefined,
            status: "pending",
            createdAt: new Date(),
        });

        await newAppointment.save();

        res.status(200).json({ message: "Re-appointment created." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create re-appointment." });
    }
};

export const updateAppointment = async (req, res, next) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedAppointment);
    } catch (err) {
        next(err);
    }
};

export const deleteAppointment = async (req, res, next) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json("Appointment has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getAppointment = async (req, res, next) => {
    try {
        const Appointments = await Appointment.findById(req.params.id);
        res.status(200).json(Appointments);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getallAppointment = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const Appointments = await Appointment.find({
            ...others,
        });
        res.status(200).json(Appointments);
    } catch (err) {
        res.status(500).json(err)
    }
}