const express= require('express')
const router = express.Router()
const User = require('../model/userSchema');

//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',async(req,res)=>{
    try{
    const {name,email,password}=req.body;
   await user.create({name,email,password})
    res.status(201).send({message:"User Created"});
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;