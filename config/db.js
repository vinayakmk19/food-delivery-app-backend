import mongoose from "mongoose";
// mongodb+srv://vinayakmkgen:Vinayakmk123@cluster0.hikxdae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://vinayakmkgen:Vinayakmk123@cluster0.hikxdae.mongodb.net/FOODDELIVERYDB').then(
        ()=> console.log("DataBase Connected")
    )
}