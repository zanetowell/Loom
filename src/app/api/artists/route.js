import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Artist from "@/models/Artist"

export const GET = async (request) => {

    try {
        await connect()

        const artists = await Artist.find()
        
        return new NextResponse(JSON.stringify(artists), { status: 200 })
    } catch (err) {
        return new NextResponse("Database Error!", { status: 500 })
    }

}