// const a = 23;

var data = require("./HTTP.js")
console.log(data)

// console.log(a)

const fs = require("fs");


//  Write File ---------------------------
fs.writeFile("Hello.txt", 'Hello world Ji from New file', function (err) {
    if (err) console.log(err);
    else console.log('File Created and written done in File')
})

//  Read File ----------------------------
fs.readFile('Hello.txt', 'utf-8', function (err, data) {
    if (err) console.log(err);
    else console.log(data)
})

//Append ----------------------------------
fs.appendFile('Hello.txt', ' Appended Text ', function (err, data) {
    if (err) console.log(err);
    else console.log(data);
})

//  Rename ----------------------------------
fs.rename('Hello.txt', 'helo.txt', function(err){
    if(err) console.log(err)
    else console.log("Name Chnaged")
})

// Delete -----------------------------------
fs.unlink('hello.txt', function(err){
if(err) console.log(err)
    else console.log("File deleted")
})


//  Create Folder ---------------------------
fs.mkdir("Lolo", function(err){
    if(err) console.log(err);
    else console.log("Created New Folder")
})

// Reading a folder -------------------------
fs.readdir("Lolo", { withFileTypes: true }, function (err, files) {
    if (err) console.log(err);
    else console.log(files)
})

// Delete Folder --------------------------
fs.rm("Lolo", { recursive: true }, function (err) {
    if (err) console.log(err)
    else console.log("Folder Deleted")
})