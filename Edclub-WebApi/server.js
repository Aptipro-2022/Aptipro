const express = require('express')
const bodyParser = require('body-parser')
const cors= require('cors');
const User = require('./models/userregistration')
const PORT = 3000

const app = express()
app.use(cors());
app.use(bodyParser.json())

const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/Aptipro";
mongoose.Promise = global.Promise;

// app.get('/login',function(req,res){
//     res.send("ok");
//     console.log(req.body);
// })

app.post("/login",function(req,res){
    let details = req.body;
    console.log(details);
    const token = jwt.sign(req.body,'secrertkey')
    console.log(token);
    res.status(200).send({token})
})

app.listen(PORT, () => {
    mongoose.connect(
        'mongodb://127.0.0.1:27017' ,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });
    console.log("server running on port 3000");
})