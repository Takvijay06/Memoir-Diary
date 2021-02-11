const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'memoir'
});

connection.connect((err)=>{
    if(!err){
        console.log("Connected to database successfully");
    }
    else{
        console.log("Failed to connect to Database");
    }
});

module.exports=connection;