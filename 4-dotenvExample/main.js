/**
 * This file shows how to use the dotenv package to use variables defined in a .env file.
 * like JSON .env files store information in a key value pair structure.
 * .env files provide a secure way of storing your passwords and API keys, instead of storing them in your code
 *      you can store them in your .env file, then use the variables stored in the .env file in your code.
 *      to give you an example of bad practice of using sensitive information in your code, look at the badDbConfig.js file.
 *      then look at the goodDbConfig.js file.
 * .env files are not shared when sharing your code and are usually added to the .gitignore file so the file is not uploaded to your remote repository.
 * imagine if you had your database password in your code, and someone found your code online, then they would know your database password and possibly exploit it.
 * To get started testing this file, do the following:
 * 1. create a file called ".env" within this file's current directory
 * 2. add the below content to the file.
DB_HOST="locahost"
DB_PORT=3366
DB_USER="dbuser"
DB_PASSWORD="themostsecretpassword"
DB_NAME="myappdb"
 */

const dotenv = require('dotenv')
 // by default dotenv will look in the current filepath to find the .env file
 // dotenv parses the file and creates new properties in the process.env object, with the same
 //     name and values as defined in your .env file.
dotenv.config()

function testEnv(){
    // access your environment variables using the process.env global object
    // console.log(process.env) // holds all environment variables including the ones defined in your .env file
    console.log(process.env.DB_HOST)
}
testEnv()