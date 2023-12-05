const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5050;


//middleware to parse json request body
app.use(express.json());


const todoRoutes = require('./routes/todo'); 

//mount the todo API routes
app.use('/api/v1',todoRoutes);


app.listen(PORT,()=>{
    console.log("App is running successfully on PORT -> "+PORT);
})

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get('/',(req,res)=>{
      res.send(`<h1>This is HOMEPAGE BABY</h1>`);
})

