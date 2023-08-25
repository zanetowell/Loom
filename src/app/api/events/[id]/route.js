"use server"

import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Event from "@/models/Event"

export const GET = async (request, {params}) => {

    const { id } = params

    try {
        await connect()

        const event = await Event.findById(id)
        
        return new NextResponse(JSON.stringify(event), { status: 200 })
    } catch (err) {
        return new NextResponse("Database Error!", { status: 500 })
    }

}