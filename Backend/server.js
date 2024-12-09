import express from 'express'
import cors from 'cors'
import db from './database.js'
import authRouter from './routes/auth-router.js'
import userRouter from './routes/user-router.js'
import appointmentRouter from './routes/appointment-router.js'
import chatbotRouter from './routes/chatbot-router.js'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter)
app.use("/api/appointment", appointmentRouter)
app.use("/api/chatbot", chatbotRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    db();
    console.log(`Connected to Backend! - ${PORT}`)
});