const { response } = require('express')
const express= require('express')
const app=express()
// listen for request

app.listen(3000)

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root: __dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html', {root: __dirname})
})

// 404's HAS TO BE AT THE BOTTOM -- LIKE A CATCH ALL 
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})