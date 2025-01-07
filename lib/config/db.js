import mongoose, { Mongoose } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nauman:nauman@cluster0.7y24k.mongodb.net/blog-app')
    console.log("DB Connected");
    
}