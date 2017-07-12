var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req,res,next)=> {
  res.render("interface/home")
});

router.get('/home',(req,res,next)=> {
    res.render("interface/home")
})

router.get("/login",(req,res,next)=>{
    res.render("interface/login")
})

router.get("/contato",(req,res,next)=>{
    res.render("interface/contato")
})

module.exports = router;
