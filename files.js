// reading files 
const fs= require('fs')
/*
fs.readFile('./docs.txt',(err,data)=>{
if(err){
    console.log('error')
}
console.log(data.toString());
})

// this executes first 
console.log('last line')
*/

//writing files
/*
fs.writeFile('./docs.txt','HEllo,world',()=>{
    console.log('file was written ')
})
fs
fs.writeFile('./docs2.txt','HEllo,world',()=>{
    console.log('file was written ')
})
*/
// directories

/*
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=> {
    if(err){
        console.log(err)
    }
    console.log('folder created')
})
}
else{
    fs.rmdir('./assets',(err)=>{
    if(err){
        console.log(err)
        }
    console.log('folder deleted')
    })
}
*/