const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection successful");
    }
    catch(err){
        console.log("MongoDB connection failed: ", err);
        process.exit(1); // Exit the process with failure

    }
}

module.exports = connectDb;