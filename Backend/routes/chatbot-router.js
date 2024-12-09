import express from 'express'
import { chatWihtChatBot } from '../controllers/chatbot-controller.js'

const router = express.Router();

router.post("/", chatWihtChatBot);

export default router