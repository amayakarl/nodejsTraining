// requiring a local javascript file that is outside the current folder.
const multiply = require('../multiply') 

function square(x){
    return multiply(x, x)
}
function add(num1, num2){
    return num1 + num2
}
// exporting a javascript object with two functions
/*module.exports = {
    square, 
    add
}*/