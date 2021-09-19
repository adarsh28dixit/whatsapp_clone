import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    name: {type: String},
    message : {type: String}
},
{
    timestamps: true
});

const Messages = mongoose.model('Messages', messageSchema);

export default Messages;