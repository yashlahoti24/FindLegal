const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/findLegal")
const db= mongoose.connection
db.on('error',(error)=> console.log(error))
db.once('open',()=> console.log("connected to database"))
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/auth', require("./routes/a"));
app.use('/discussion-forum',require("./routes/discussion-forum"));
app.use("/search",require("./routes/filter"));
app.use("/bid",require("./routes/bid"));


app.listen('5000',()=>{
    console.log("app listening on port 5000 for inotebook ")
})

