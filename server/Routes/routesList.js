import { Router } from "express";
const route=Router()
route.get('/',(req,res)=>{
    res.send('hey there')

})
route.get('/bikes',(req,res)=>{
    res.json([
        {
            bike:'ns200',
            price:178000
        },
        {
            bike:'rtr160',
            price:150000
        },
        {
            bike:'mt15',
            price:140000
        }
    ])
})
export default route