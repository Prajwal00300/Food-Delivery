import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)





  
// app config
const app = express()
const port = process.env.port || 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static(path.join(__dirname, 'uploads')))
if (process.env.VERCEL) {
    app.use("/images", express.static('/tmp'))
}
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working")

})

if (!process.env.VERCEL) {
    app.listen(port,()=>{
        console.log(`Serve started on port http://localhost:${port}`);
    })
}

export default app;


