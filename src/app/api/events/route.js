"use server"

import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Event from "@/models/Event"

export const GET = async (request) => {

    try {
        await connect()

        const events = await Event.find()
        
        return new NextResponse(JSON.stringify(events), { status: 200 })
    } catch (err) {
        return new NextResponse("Database Error!", { status: 500 })
    }

}