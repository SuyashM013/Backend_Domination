const express = require('express')
const app = express();
const port = 4000;

const userModel = require('./models/userModel')

const upload = require('./multer-setup.js')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', upload.single('image'),async (req, res) => {
   let image = await userModel.create({
        name: req.body.name,
        image: req.file.filename
    })
    res.send(image)
})

app.listen(port, () => {
    console.log("Live on port", port)
});

