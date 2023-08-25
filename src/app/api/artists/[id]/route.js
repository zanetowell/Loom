import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Artist from "@/models/Artist"

export const GET = async (request, {params}) => {

    const { id } = params

    try {
        await connect()

        const artist = await Artist.findById(id)
        
        return new NextResponse(JSON.stringify(artist), { status: 200 })
    } catch (err) {
        return new NextResponse("Database Error!", { status: 500 })
    }

}