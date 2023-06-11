const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.end('hello from node')
})



app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})