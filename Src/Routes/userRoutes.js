
const express=require('express')
const router=express.Router()



const {userSignUp}=require('../Controllers/signup')





// routes

router.post('/signup',userSignUp)


module.exports=router