/**
 * this file shows the bad way to manage sensitive information
 * in this case, anyone who finds your code can see your database password
 */
 // export your database configuration
 module.exports = {
     host: 'locahost', // assign the .env variable first, if the variable is not set then use the value after the `??`
     port: 3360,
     user: 'root',
     password: "supersecretpassword",
     databaseName: "mydb"
 }