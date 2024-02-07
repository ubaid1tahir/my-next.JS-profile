import dbConnect from "@/db/dbConnect";
import dotenv from 'dotenv';
import { Message } from "@/models/user.model";


export async function GET() {
    const instance = await dbConnect();

    dotenv.config({
        path: './.env'
    })    
    return new Response(instance);
}

export async function POST(req) {
    try {
        const data = await req.json();
        console.log(data);
        if(!data){
            return new Response('Error in posting the data')
        }
        const message = await Message.create({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            content: data.content
        });
        console.log(message._id);

        if(!message){
            return new Response('Something went wrong while posting the message')
        }
        return new Response({"message":"Successfully POSTED the message"})
    } catch (error) {
        console.error("Something went wrong in POST");
    }
}