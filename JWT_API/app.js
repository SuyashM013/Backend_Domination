const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => (
    console.log('Server is running')
))

const connectDB = require('./config/mongoose-connection');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


connectDB();  // Connected to DB  

app.use('/api/auth', authRoutes )


app.listen(3000, ()=>{
    console.log('Server running on 3000')
})