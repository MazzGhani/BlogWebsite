// global object

// global 

//console.log(global) 

 // prints out after 3 seconds after running 
global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int)
}, 3000);

const int = setInterval(() =>{
    console.log('in the interval')

},1000);

console.log(__dirname);
console.log(__filename);

