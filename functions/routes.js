import { dbConnect } from "./dbconnect.js";

export function getMessages(req,res){
    const db = dbConnect()
    db.collection('messages').get()
    .then(collection => {
        console.log(collection)
        const messages = collection.docs.map(docs =>docs.data)
        res.send(messages)
    })
    .catch(err => handleError(err, res))
}


function handleError(err,res){
    console.error(err)
    res.status(500).send(err)
}