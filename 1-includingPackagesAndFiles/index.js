/**
 * This file shows how to use require to use a package and a local javascript file
 */

const dotenv = require('dotenv') // requiring a package
const math = require('./libs/math') // requiring a local javascript file

console.log(math.square(2), math.add(1,2))
