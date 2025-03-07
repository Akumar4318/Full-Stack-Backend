
const mongoose=require('mongoose')

require("dotenv").config()


const ConnectDB=()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log("Database connect successfully")
    )
    .catch((error)=>{
        console.error(error.message)
        console.log("DB not connected")
        process.exit(1);
       
    })
}

module.exports=ConnectDB