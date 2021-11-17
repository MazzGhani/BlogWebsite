const fs= require('fs')

const readStream= fs.createReadStream('./docs.txt',{encoding:'utf8'});

//const writeStream= fs.createWriteStream()

readStream.on('data',(chunk)=>{
console.log('new chunk')
console.log(chunk)
})