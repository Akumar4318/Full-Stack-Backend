

const express=require("express")
const app=express()



require("dotenv").config()


let PORT=process.env.PORT || 4000



console.log(process.env.PORT)


app.listen(PORT,(req,res)=>{

    console.log(`server created at Port no. ${PORT}`)
})