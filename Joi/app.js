const express = require('express');
const app = express();
const {userModel, validateUser}  = require('./models/user-model')

const port = 3000; 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello JOI testing chal rahi')
})

app.post('/create', async (req, res) => {
    try{

        // Joi Validator ->
        
        let {username,  name, email, age, contact} = req.body

       let error = validateUser({username,  name, email, age, contact})
    //    error ? res.status(500).send(error.message) : res.send('All Details corrected ')

    // if(error) { return res.status(500).send('ERROR :' +  error.message)}
    if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message
        });
      }
    else {
        // let user = await userModel.create({
        //     name: req.body.name,
        //     username: req.body.username,
        //     email: req.body.email,
        //     age: req.body.age,
        //     contact : req.body.contact
        // })
        res.send('All Details corrected \n User Created')
       
        // console.log(user)

    } 

    // if(error) return res.status(500).send(error.message)
    }catch(err){
        res.status(400).send(err)
    }
}) 


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})