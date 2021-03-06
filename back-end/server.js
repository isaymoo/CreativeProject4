const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/games', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '/var/www/cp4.jessewj.com/images/',
  limits: {
    fileSize: 100000000000000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  path: String,
  esrb: String,
  publisher: String,
  console: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    path: req.body.path,
    esrb: req.body.esrb,
    publisher: req.body.publisher,
      console: req.body.colsole,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Delete
app.delete('/api/items/:id', async (req, res) => {
    try{
        await Item.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
});

//Edit
app.put('/api/items/:id', async (req, res) => {
    try{
        let item = await Item.findOne({
            _id: req.params.id
        });
        item.title = req.body.title;
        item.esrb = req.body.esrb;
        item.console = req.body.console;
        item.publisher = req.body.publisher;
        await item.save();
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});
    

app.listen(3003, () => console.log('Server listening on port 3003!'));
