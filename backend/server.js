import express from "express";
import Mongoose from "mongoose"
import messageRouter from "./routers/messageRouter.js";


const app = express();
app.use(express.json());

Mongoose.connect('mongodb://localhost/Whatsapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api', messageRouter);

app.get('/', (req, res) => {
    res.status(201).send('Your server is ready')
})

app.listen(5000, (req, res) =>{
    console.log('http://localhost:5000')
})