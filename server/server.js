import Express from "express"
const app=Express()
app.get('/',(req,res)=>{
    res.send('hey there')

})
app.get('/bikes',(req,res)=>{
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
app.listen(2000,()=>{
    console.log('server 2000 started')
})

