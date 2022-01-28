/**
 * this file is the main entry point for our express server
 */
const express = require('express') // bring in the express package
const server = express() // create an Express application and assign it to server variable

// global middleware telling express how to parse the request body of type JSON
// will create a javascript object containing the data passed in the request body
//  the request body can then be accessed using the `request.body` object
server.use(express.json())

// example of a global middleware, ideally define global middleware at the top
server.use(function(request, response, next){
    console.log("I am a global middleware")
    next()
})

// creating routes in express.js
// <method: GET> <request path: '/'> <handler: function(request, response){}>
server.get('/', function(request, response){
    return response.send('<h1> Hello :) </h1>')
})

// example of using URI parameters in express.js
server.get('/users/:userId', function(request, response){
    console.log(request.params)
    return response.send(request.params.userId)
})

// example of a route specific middleware
server.get('/users', function(request, response, next){
    console.log("I am a route specific, middleware")
    //response.redirect('/')
    next()
},
 function(request, response){
    console.log(request.query) // example using query strings in express js
    return response.send('list of users')
})

// example using POST
server.post('/users', function(request, response){
    console.log(request.body.name) // example accessing a request body in express js
    return response.json({
        status:true
    })
})
// server.put('/users', function) // use put(routepath, function) to handle PUT requests
// server.delete('/users', function) // use delete(routepath, function) to handle DELETE requests
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

