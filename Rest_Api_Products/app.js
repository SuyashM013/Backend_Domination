const express = require("express");
require("dotenv").config();
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 2300;


app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Server is working");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// console.log("End");