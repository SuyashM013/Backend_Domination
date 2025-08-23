const express = require('express');
const router = express.Router();

const userModel = require('../models/user')

// const user = [
//     {_id: "1", name: "suyash"},
//     {_id: "2", name: "suyash2"},
//     {_id: "3", name: "suyash3"},
// ]

// router.post('/create', (req, res) => {
//     try {
//         userModel.create({
//             name: req.body.name,
//             userName: req.body.userName,
//         })
//         res.json({
//             sucess: true,
//             message: 'User created'
//         });
//     } catch (err) {
//         res.json({
//             sucess: false,
//             message: err.message
//         });
//     }
// })

// router.get('/users', (req, res) => {
//     res.json(user);
// })

// router.get('/users/create', (req, res) => {
//     let index = Math.floor(Math.random()*10);
//     user.push({
//         id: index,
//         name: req.body.name
//     })
//     res.json(user);

// })

// router.get('/users/:id', (req, res) => {
//     let found = user.find((elem) => elem._id === req.params.id )

//     if(found){
//         res.json(found);
//     }
//     else{
//         res.json({
//             message: "User not found"
//         })
//     }
// })

router.get('/users', async (req, res) => {
    let users = await userModel.find();
    res.json(users);
})

router.post('/users', async (req, res) => {
    let users = await userModel.create({
        name: req.body.name,
        userName: req.body.userName
    })
    res.json(users);
})

router.put('/users/:id', async (req, res) => {
    let user = await userModel.findOneAndUpdate({
        _id: req.params.id
    },
        {
            name: req.body.name,
        },
        { new: true }
    )
    res.json(user);
})
router.delete('/users/:id', async (req, res) => {
    let user = await userModel.findOneAndDelete({
        _id: req.params.id
    },

    )
    res.json(user);
}) 

module.exports = router;