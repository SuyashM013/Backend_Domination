module.exports.homeController = function(req, res){
    // res.send('Hey from server and inside the controller')

    res.render('index', {name:"Suyash Mishra"});
};