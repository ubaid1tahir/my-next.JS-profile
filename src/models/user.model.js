import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        index: true
    }, 
    email: {
        type:String,
        required: true
    }, 
    phoneNumber: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    }
}, {timestamps: true});

export const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);