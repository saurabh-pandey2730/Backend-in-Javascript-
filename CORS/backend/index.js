  import express  from 'express';


 import { data } from "./data.js";
const app= express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/book',(req,res)=>{
    res.send(data)
})
const port = 4000

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})