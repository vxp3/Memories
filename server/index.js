import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express ();

//every routes inside the postRoutes will start with posts
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://testProject:testProject123@cluster0.azu4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    //this return a promise 
    //if our connection is successful then we want it to call app and app listen, the listen is going to accept to permier, the PORT and callback funtion once our the app is successful listen
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    //if it is not successful then run a error there
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
