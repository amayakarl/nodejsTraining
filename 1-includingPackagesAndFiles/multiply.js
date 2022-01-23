// being used to show how to use a javascript file inside another javascript file

function multiply(x, y){
    return x * y
}

// use module.exports to make functions, objects or variables available for other javascript files to use

module.exports = multiply