import mongoose from "mongoose";

const { Schema } = mongoose

const artistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
    }
)

//If the Artist collection does not exist create a new one.
export default mongoose.models.Artist || mongoose.model("Artist", artistSchema);