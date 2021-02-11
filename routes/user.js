const express = require('express')
const Router = express.Router();
const dbcon = require('../configurations/dbconfig');
Router.get('/user',async(req,res)=>{
     dbcon.query("select * from userdetails",(err,result)=>{
         if(err) throw err;
         res.json({
             "error":false,
             "Data":result,
         });
     })
});

Router.get('/user/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id)
   dbcon.query('select * from userdetails where User_id=?',id,(err,result)=>{
       res.json({
           "error":false,
           "Data":result
       });
   });
});

Router.post('/user',(req,res)=>{
    const Name=req.body.Name;
    const Email=req.body.Email;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    const Gender = req.body.Gender;
    const DOB = req.body.DOB;
    var date = new Date();

    const data = [Name,Email,Phone,Password,Gender,DOB,date,date,"Normal User"];

    dbcon.query("insert into userdetails (Name,Email,Phone,Password,Gender,DOB,Created_At,Updated_At,Role_id) values(?,?,?,?,?,?,?,?,?)",data,(err,result)=>{
        if(err) throw err;
        res.json({
            "error":false,
            "Message": "Data successfully inserted"
        });
    })

})

module.exports = Router;