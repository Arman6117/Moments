import 'express-async-handler'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoute from './Routes/posts.js';
import { errorHandler}  from './Middlewares/errorHandler.js';
import  {notFound } from './Middlewares/notFound.js';
const app = express();

app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use('/posts',postRoute);

//!ERROR HANDLER MIDDLEWARES
app.use(errorHandler)
app.use(notFound)
const CONNECTION_URL = 'mongodb+srv://admin-arman:mongo2505@cluster0.7pt4git.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

try {
    await mongoose.connect(CONNECTION_URL, console.log('Connected to database'));
    app.listen(PORT,console.log(`Server is listening on port ${PORT}`))
} catch (error) {
    console.log(error.message);
}
