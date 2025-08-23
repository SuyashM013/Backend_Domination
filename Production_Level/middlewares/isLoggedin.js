module.exports = (req, res, next) => {
    req.randomnumber = Math.random();
    next();
    
}