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
        if(!data){
            return new Response('Error in posting the data')
        }
        console.log(data);
        const message = Message.create(data);
        if(!message){
            return new Response('Something went wrong while posting the message')
        }
        return new Response('Successfully POSTED the message')
    } catch (error) {
        console.log("Something went wrong in POST");
    }

}