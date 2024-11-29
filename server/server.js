import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './database/db.js';
import userRoute from './routes/uesr.route.js'
import cors from 'cors'


dotenv.config({});

// call database connection
connectDB()
const app = express();

const PORT = process.env.PORT || 3000;

//default middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:8080",
    credentials:true
}))

// APIs
app.use('/api/v1/user',userRoute);

// http://localhost:8080/api/v1/user/register

app.get('/home',(_,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello I am comming from backend"
    })
})

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`);
})