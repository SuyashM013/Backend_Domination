const express = require('express')
const port = 2900;
const app = express()

app.set('view engine', 'ejs');

// data dekhne ke lie

app.use(express.json()) 
app.use(express.urlencoded({extended: true}))  //support all the forms


app.get("/", (req, res) => {
    res.render("index");
})

// app.get("/check", (req, res) => { 
//     // res.render("index");

//     console.log(req.query)
//     res.send("Checked your details")
// })

app.post("/check", (req, res) => { 

    console.log(req.body)
    res.send("Checked your details")
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})