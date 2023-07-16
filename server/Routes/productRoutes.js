import { Router } from "express";
import productController from "../Controllers/productController.js";

const proRoute=Router()

proRoute.get('/',(req,res)=>{
    res.send('hello there')
})
proRoute.get('/products',productController)
export default proRoute