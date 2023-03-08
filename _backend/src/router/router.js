
const express = require('express');
const { json } = require('react-router-dom');
const router = new express.Router();


router.get('/sample',async(req,resp)=>{
    return resp.status(200).json();
})

module.exports = router;