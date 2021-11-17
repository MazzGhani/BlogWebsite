const http= require('http')
const fs= require('fs')
const server= http.createServer((req,res) => {
console.log(req.url, req.method)
// set ehader content type
res.setHeader('Content-Type','text/html')
// status codes 
// 200 - OK
// 301 - resources moved
// 404 - not found
// 500 - internal server error

let path= './views/';
switch(req.url){
    case '/': path += 'index.html';
    res.statusCode= 200;
    break;
    case '/about' : path += 'about.html'
    res.statusCode= 200;
    break;
    default: path += '404.html';
    res.statusCode= 404;
    break;

}

fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        res.write(data)
        res.end()
    }
})

})

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})