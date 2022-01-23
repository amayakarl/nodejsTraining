/**
 * This file shows how to use the dotenv package to use variables defined in a .env file
 */

const dotenv = require('dotenv')
dotenv.config() // by default dotenv will look in the current filepath to find the .env file

function testEnv(){
    // access your environment variables using the process.env global
    // console.log(process.env) // holds all environment variables including the ones defined in your .env file
    console.log(process.env.DB_HOST)
}
testEnv()