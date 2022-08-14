import functions from "firebase-functions";
import  express  from "express";
import cors from "cors";
import { getMessages, addMessage } from "./routes.js";


const app = express()
app.use(express.json())
app.use(cors())
// const port = 3001;

app.get('/messages',getMessages)
app.post('/messages', addMessage)


// app.listen(port, () => {
//     console.log('listening')
// })






export const api = functions.https.onRequest(app)
