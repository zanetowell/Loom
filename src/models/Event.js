import mongoose from "mongoose";

const { Schema } = mongoose

const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }
)

//If the Artist collection does not exist create a new one.
export default mongoose.models.Event || mongoose.model("Event", eventSchema);