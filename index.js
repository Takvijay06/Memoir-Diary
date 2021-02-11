const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/login',(req,res) => {
   console.log(req.body.email);
   console.log(req.body.pass); 
   res.send("OK");
});

const port = process.env.PORT || 3000;
app.listen((port), () => {
    console.log("  Listening " + port + " ");
});

