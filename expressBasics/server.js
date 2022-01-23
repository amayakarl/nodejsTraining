/**
 * this file is the main entry point for our express server
 */
const express = require('express') // bring in the express package
const server = express() // create an Express application and assign it to server variable


/* 
    begin listening for any requests
    by listening we enter a sort of infinite loop, where the server starts listening to requests on the
    designated port and doesn't stop unless an error happens or we stop it manually.
    the express.listen method takes in a port number, the port doesn't matter as long 
    as it's a port you know to be open 
*/
server.listen(3000, function(){ // this function is called once the server has started
        // to access our web service, we can use a browser and visit http://localhost:3000
    console.log('server started on http://localhost:3000')
})

