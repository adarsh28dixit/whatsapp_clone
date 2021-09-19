import express from 'express'
import Messages from '../models/messageModel.js';

 const messageRouter = express.Router();

 messageRouter.post('/message', (req, res) => {
     const dbMeassage  = req.body ;

     Messages.create(dbMeassage, (err, data) =>{
         if(err){
             res.status(500).send(error)
         } else {
             res.status(201).send(data)
         }
     })
 });

 export default messageRouter;