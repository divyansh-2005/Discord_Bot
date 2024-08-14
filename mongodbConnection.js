import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/discord-bot";

async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error in MongoDB connection:", error);
    }
}

export { connectDB };
