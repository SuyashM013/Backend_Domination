const express = require('express')
const port = 6900;
const app = express()
const fs = require('fs')
const path = require('path');


app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        if(err) return res.status(500).send("Unable to scan directory")
        res.render("index", { files })

    })
})

app.get('/show/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', (err, data) => {
        if (err) return res.send(err);
        res.render("Show", { data, filename: req.params.filename })
    })
})


app.get('/edit/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', (err, data) => {
        if (err) return res.send(err);
        res.render("Edit", { data, filename: req.params.filename })
    })
})

app.get('/editexit/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', (err, data) => {
        if (err) return res.send(err);
        res.render("Editkrna", { data, filename: req.params.filename })
    })
})

// app.get('/rename/:filename', (req, res) => {
//     fs.renameFile(`./files${req.paramas.filename}`, `./files/${req.body.newfilename}`, (err) => {
//         if (err) return req.send(err)
//         res.redirect('/')
//     })
// })

app.get('/delete/:filename', (req, res) => {
    fs.unlink(`./files/${req.params.filename}`, (err) => {
        if (err) return res.send(err);
        res.redirect('/')
    })
})

app.post('/update/:filename', (req, res) => {
    fs.writeFile(`./files/${req.params.filename}`, req.body.filedata, (err) => {
        if (err) return res.send(err);
        res.redirect('/')
    })
})

app.get('/create', (req, res) => {

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    // const fn = `${day}-${month}-${year}`
    // const time = currentDate.getTime();
    const hour = currentDate.getHours();
    const min = currentDate.getMinutes();
    const fn = `${day}-${month}-${year}_${hour}-${min}.txt`

    fs.writeFile(`./files/${fn}`, "Hisaab kar loo", (err) => {
        if (err) res.send("Something went wrong")

        res.redirect(`/edit/${fn}`)
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
