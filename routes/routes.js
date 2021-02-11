const express = require('express');
const router = express.Router();

router.post('/login',(req,res) => {
    console.log(req.body.email);
    console.log(req.body.pass); 
    res.send("OK");
 });
 
 router.post('/register',(req,res) => {
       console.log({
           name : req.body.name,
           email: req.body.email,
           phone: req.body.phone,
           gender: req.body.gender,
           DOB: req.body.DOB,
       });
       res.status(200).send("Value Stored")
 });

 module.exports = router;