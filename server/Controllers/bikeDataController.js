let bikeData=[
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
]
export const bikeDataController=(req,res)=>{
    res.json(bikeData)
}
export const newArrival=(req,res)=>{
    const info=req.body
    bikeData.push(info)
}
// export default{
//     bikeDataController,
//     newArrival
// }
