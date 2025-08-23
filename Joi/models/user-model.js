const mongoose = require('mongoose')
const Joi = require('joi')

mongoose.connect("mongodb://127.0.0.1:27017/joitetdb")

// "mongodb+srv://suyash:suyashmishra29@cluster1.z1sug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"


// ----------------------------------------------------------------
// ------------------------- Khud se Likha yh wala schema -------------
// const userSchema = mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     name: {
//         type: String,
//         required: true,

//     },
//     age: {
//         type: Number,
//         required: true,

//     },
//     contact: {
//         type: Number,
//         required: true,
//         maxLength: 10,


//     },
//     email: {
//         type: String,
//         required: true,

//     }
// })


// -------------------------------------------------------------------
// ---------------AI Se likhwaya Schema - phind ai ----------------
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
        match: [/^[a-zA-Z0-9_]+$/, 'Username must contain only letters, numbers, and underscores']
    },
    name: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters'],
        minlength: [2, 'Name must be at least 2 characters long']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age cannot be negative'],
        max: [150, 'Age cannot exceed 150 years']
    },
    contact: {
        type: Number,
        required: [true, 'Contact number is required'],
        min: [1000000000, 'Invalid contact number'],
        max: [9999999999, 'Invalid contact number'],
        validate: {
            validator: function (v) {
                return v.toString().length === 10;
            },
            message: 'Contact number must be exactly 10 digits'
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ]
    }
});

// ----------------------------------------------------------------
// ------------------------- Khud se Likha yh wala Joi Validation -------------


// const validateUser = (data) => {
//     const schemajoi = Joi.object({
//         username: Joi.string().required(),
//         name: Joi.string().required(),
//         email: Joi.string().email().required(),
//         age: Joi.number().min(18).required(),
//         contact: Joi.number().required()
//     })

//     let { error } = schemajoi.validate(data)
//     //    console.log(resolveres.error?.message)
//     return error
// }


// -------------------------------------------------------------------
// ---------------AI Se likhwaya validation - phind ai --------------- 

const validateUser = (data) => {
    const schemajoi = Joi.object({
        username: Joi.string()
          .required()
          .messages({
            'string.empty': 'Username is required',
            'any.required': 'Username is required'
          })
          .pattern(/^[a-zA-Z0-9_]+$/)
          .messages({
            'string.pattern': 'Username must contain only letters, numbers, and underscores'
          })
          .trim()
          .lowercase(),
      
        name: Joi.string()
          .required()
          .messages({
            'string.empty': 'Full name is required',
            'any.required': 'Full name is required'
          })
          .min(2)
          .max(100)
          .messages({
            'string.min': 'Name must be at least 2 characters long',
            'string.max': 'Name cannot exceed 100 characters'
          })
          .trim(),
    
        age: Joi.number()
          .required()
          .messages({
            'number.empty': 'Age is required',
            'any.required': 'Age is required'
          })
          .min(0)
          .max(150)
          .messages({
            'number.min': 'Age cannot be negative',
            'number.max': 'Age cannot exceed 150 years'
          }),
      
        contact: Joi.number()
          .required()
          .messages({
            'number.empty': 'Contact number is required',
            'any.required': 'Contact number is required'
          })
          .min(1000000000)
          .max(9999999999)
          .messages({
            'number.min': 'Invalid contact number',
            'number.max': 'Invalid contact number'
          }),
        
        email: Joi.string()
          .required()
          .messages({
            'string.empty': 'Email is required',
            'any.required': 'Email is required'
          })
          .email() // this will validate for all the .com, .in, .org, etc
        //   .messages({
        //     'string.email': 'Please enter a valid email address'
        //   })

        // custom handler for email validation emails
        .custom((value, helpers) => {
            const allowedDomains = ['.com', '.in', '.org'];
            const domain = '.' + value.split('.').pop();
            
            if (!allowedDomains.includes(domain)) {
              return helpers.message({
                custom: 'Email must use one of the following domains: .com, .in, or .org'
              });
            }
            
            return value;
          })
          .messages({
            'string.email': 'Please enter a valid email address',
            'string.custom': 'Email must use one of the following domains: .com, .in, or .org'
          })
          .trim()
          .lowercase()
      });

      let {error} = schemajoi.validate(data)
      return error;
}



let userModel = mongoose.model("User", userSchema)

module.exports = { userModel, validateUser }