/**
 * File covers how to use axios to make HTTP requests to other web services
 * - checkout the axios documentation for indepth information about axios https://axios-http.com/docs/intro
 */

const axios = require('axios')

// Example: here we see that axios.get returns a promise, when we print out the promise
// we see that the promise says its still pending
// this is because when we print the promise, the server has not yet responded
function getNewFactPromisePending(){
    var fact = axios.get('https://catfact.ninja/fact')
    console.log(fact) // Promise(<pending>)
}
//getNewFactPromisePending() // uncomment to see output

// here we see how use promises the right way
function getNewFact(){
    // we use the `get` method to make a GET request, we pass in a URI as a parameter
    // axios provides methods for making POST, PUT, DELETE etc. requests

    // axios returns a promise, we can then chain to that promise using the `then` method
    axios.get('https://catfact.ninja/fact')
        .then(function(response){
            let fact = response.data
            console.log(fact)
        })
        .catch(function(error){
            console.log(error.message)
        })
    console.log("I am tired of waiting, i will run first.")
}
getNewFact()
