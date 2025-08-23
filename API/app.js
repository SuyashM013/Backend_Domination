const express = require("express"); 
const app = express();
const port = 3500;
const indexRouter = require('./routes/indexRouter')
const apiRouter = require('./routes/apiRouter')

app.set("view engine", 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/', indexRouter)

app.use('/api', apiRouter) 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})