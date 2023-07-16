import Express from "express"
import cors from 'cors'
import route from "./Routes/routesList.js"
import proRoute from "./Routes/productRoutes.js"
import connect from "./Database/connection.js"
import { config } from "dotenv"

const app=Express()
app.use(cors())
config()
app.use(Express.json())
app.use(route)
app.use(proRoute)
connect().then(()=>{
    try{
        app.listen(2006,()=>{
            console.log('server 2006 started')
        })

    }catch{
        throw err

    }

}).catch((err)=>{
    console.log(err)
})




