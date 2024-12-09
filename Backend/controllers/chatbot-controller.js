import { spawn } from "child_process"

export const chatWihtChatBot = (req, res) => {

    const userQuery = req.body.query || "I am sick";
    const childPython = spawn('python', ['chatbot.py', userQuery]);

    childPython.stdout.on('data', (data) => {
        try{
            // res.status(data);
            const response = data.toString();
            console.log(response);
            res.status(200).json(response);
        }
        catch(err){
            res.status(500).json(err);
        }
    })
}