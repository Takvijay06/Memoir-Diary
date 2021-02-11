const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 3000;
const Router = require('./routes/user');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api',Router);

app.listen(port,()=>console.log(`Server starts at port ${port}`));