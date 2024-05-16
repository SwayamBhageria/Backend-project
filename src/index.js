import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
    path: './.env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("process running at port")
    })
})
.catch((error) => {
    console.log("Mongo db connection error",error)
})

