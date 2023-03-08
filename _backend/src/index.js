console.log('Bakend')

const express = require('express');
const router = require('./router/router')
const app = express();
const port = process.env.port || 4000;

app.use(express.json())
app.use((req,resp,next)=>{
    resp.setHeader('Access-Control-Allow-Origin',"*");
    resp.setHeader('Access-Control-Allow-Headers',"Origin,Authorization,Content-Type");
    resp.setHeader('Access-Control-Allow-Methods',"GET,PUT,POST,PATCH");
    next();
})
app.use(router);
app.listen(port,()=>{
    console.log('Connnected to port:'+port)
})