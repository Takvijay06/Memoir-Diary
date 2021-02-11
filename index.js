const express = require('express');
const app = express();
const loginreg = require('./routes/route_LoginReg');

app.use(express.json());
app.use('/api' ,loginreg);

const port = process.env.PORT || 3000;
app.listen((port), () => {
    console.log("  Listening " + port + " ");
});

