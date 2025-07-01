import mongoose from "mongoose";


export const connectDB = async ()=> {
          await mongoose.connect('mongodb+srv://prajwalkamboj3:8307622@cluster0.kk0g5dz.mongodb.net/food-del').then(()=>console.log("DB connected"));
} 