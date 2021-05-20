require('./db/db')
const express=require('express')
const router=require('./router/router')
const jobRouter=require('./router/jobs')
const app=express();
const port=process.env.port||3000;

app.use(express.json())
app.use((req,res,next)=>{

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,Authorization,Content-Type");
    res.setHeader("Access-Control-Allow-Methods","GET,PUT,POST,PATCH,DELETE,FETCH");
    next();
})

app.use(router)
app.use("/jobs",jobRouter)
app.listen(port,()=>{

    console.log('Connected to Port : '+port);
})