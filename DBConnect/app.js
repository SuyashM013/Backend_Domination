const express = require('express');
const port = 9000;
const mongoose = require('mongoose');

const app = express()

mongoose
    .connect(
        "mongodb+srv://Suyash:Suyash@29@cluster0.ueq8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(function () {
        console.log("Connected to MongoDB");
    })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})