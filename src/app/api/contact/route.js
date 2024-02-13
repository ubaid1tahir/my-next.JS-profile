import dbConnect from "@/db/dbConnect";
import dotenv from 'dotenv';
import { Message } from "@/models/user.model";
import { NextResponse } from "next/server";


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
            return new NextResponse({"msg" : "All Fields are required"}, {status: 404})
        }
        const message = await new Message({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            content: data.content
        });

        if(!message){
            return new NextResponse({"msg" : "Something is wrong while posting the message"}, {status: 404})
        }
        await message.save()
        return new NextResponse({"msg" : "Successfully POSTED the message"}, {status: 200})
    } catch (error) {
        console.error("Something went wrong in POST");
    }
}