const { response } = require('express')
const express= require('express')
const app=express()
const mysql= require('mysql')
const PATH = __dirname + "/views/"

const connector= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database:'assignment'
})

connector.connect((err) => {
        if(err){
            throw(err)
        }
        else{
            console.log("connected to database!")
        }

    }
);
// register view engine
//app.set('view engine','ejs')
// listen for request

app.listen(3000)

app.get("/", (req, res) => {
    res.sendFile(PATH + "index.html")
})

app.post('/main',(req,res)=>{
   var topic=req.body.id
   var data= req.body.data
   var timestamp= new Date()

   var sql = `INSERT INTO posts (topic, data, timestamp) VALUES ('${topic}', '${data}', '${timestamp}')`

connector.query(sql, (err)=>{
    if(err){
        throw (err)
    }
    else{
        console.log("values have been inserted !")
    }

})

res.send("stored successfully !");

})


app.get('/getMethod',(req,res)=>{
var sql='SELECT topic,data,timestamp FROM posts'
connector.query(sql, (err,result)=>{
    if(err){
        throw (err)
    }
    else{
        console.log("values have been posted !")
        res.json(result)
    }

})
})