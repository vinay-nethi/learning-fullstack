import Express from "express"
import cors from 'cors'
import route from "./Routes/routesList.js"
import proRoute from "./Routes/productRoutes.js"
const app=Express()
app.use(cors())
app.use(route)
app.use(proRoute)
app.listen(2001,()=>{
    console.log('server 2001 started')
})

