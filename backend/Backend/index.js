const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
// const Image = require('../models/image');
const Image= require("./models/Image")
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/findLegal")
const db= mongoose.connection
db.on('error',(error)=> console.log(error))
db.once('open',()=> console.log("connected to database"))
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
    const newImage = new Image({
      name: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype,
      lawyerId:req.body.lawyerId
    });
    // console.log(req.body.la)
    console.log(req.body.lawyerId,"lawyer from body")
  
    try {
      const savedImage = await newImage.save();
      res.status(200).json(savedImage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Fetch all images endpoint
  app.get('/images', async (req, res) => {
    try {
      const images = await Image.find({});
      res.status(200).json(images);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Fetch single image endpoint
  app.get('/image/:id', async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      res.contentType(image.contentType);
      res.send(image.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
app.use('/auth', require("./routes/a"));
app.use('/discussion-forum',require("./routes/discussion-forum"));
app.use("/search",require("./routes/filter"));
app.use("/bid",require("./routes/bid"));

app.listen('5000',()=>{
    console.log("app listening on port 5000 for inotebook ")
})