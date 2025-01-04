import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';

const app = express();
//middleware for passing json request to body
app.use(bodyParser.json());
app.use(cors())
dotenv.config();
const PORT = process.env.PORT || 3000 || 7800;
const db = "mongodb+srv://nisanthg1010:nisa1010@cluster0.kimlp.mongodb.net/";
app.use('/api/user',router);
mongoose.connect(db).then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});