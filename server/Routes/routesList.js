import { Router } from "express";
import {bikeDataController,  newArrival } from "../Controllers/bikeDataController.js";
const route=Router()
route.get('/',(req,res)=>{
    res.send('hey there')

})
route.get('/bikes',bikeDataController)
route.post('/bikes',newArrival)
export default route