import express from "express"
import * as dotenv from "dotenv";
import cors, { CorsOptions } from 'cors'

const corsOption: CorsOptions = {
    origin: ["http://localhost:5173"]
}
dotenv.config();

const app = express();
app.use(cors(corsOption))
const port = process.env.PORT || 9999;


app.listen(9999, ()=> {
    console.log("Server started on port 9999")
})


app.get("/test",(req,res) =>{
    console.log("HI")
    res.json("hi me")
});