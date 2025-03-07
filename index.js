

const express=require("express")
const app=express()



require("dotenv").config()

app.use(express.json())

let PORT=process.env.PORT || 4000



const routes=require('./Src/Routes/userRoutes')


const connectDB=require('./Src/Config/database')
connectDB()


app.use('/api/v1',routes)


app.listen(PORT,(req,res)=>{

    console.log(`server created at Port no. ${PORT}`)
})


app.get('/',(req,res)=>{

    res.send(`<h1>hello from home</h1>`)
})