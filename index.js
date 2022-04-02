import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import bodyParser from 'body-parser'
import account from './schema/appschema.js'

const app = express();
app.use(express.json())

app.use(bodyParser.json())

const url = process.env.MONGODB_URI

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to server')
    app.listen(4224);
}).catch((err) => console.log(err));

app.post('/accounts', (req, res) => {
   const list = new account(req.body)
    list.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
    console.log('Post request works.')

});

app.get('/accounts', (req, res) => {
    res.send({
        message: 'Get request working',
    })
    console.log('Website accessed')
}); 