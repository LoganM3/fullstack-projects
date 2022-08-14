// import functions from "firebase-functions";
import  express  from "express";
import cors from "cors";
import { getMessages } from "./routes.js";


const app = express()
app.use(express.json())
app.use(cors)
const port = 3333

app.get("/messages",getMessages)


app.listen(port, () => {
    console.log('listening')
})






// export const api = functions.https.onRequest(app)
