import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("process running at port")
    })
})
.catch((err) => {
    console.log("Mongo db connection error")
})