

/**
 * This file contains example of working with json files and json content
 */
const fs = require('fs')

function jsonExample(){
    // JSON.parse(JSONString) // takes in a string and attempts to convert it to a javascript object
        // JSON is provided by the node environment, so we don't need to use require to use it
    var notValidJson = '{name: karl amaya' // this is not a valid JSON string
    //console.log(JSON.parse(notValidJson)) // will produce an error

    var validJson = '{"name":"karl amaya"}' // this is a valid JSON string
    var validJsonObj = JSON.parse(validJson) // will conver it into a javascript object
    console.log(validJsonObj.name) // can now use JSON keys as object properties/attributes

    // JSON.stringify(javascriptObject) converts a javascript object into a JSON string

    var jsObj = {
        name:"John Doe",
        age: 55
    }

    var jsonString = JSON.stringify(jsObj)
    console.log(jsObj, jsonString)

}
//jsonExample()

function jsonFileExample(){
    // Save json object to file
    
    var person = {
        name:"john doe",
        age: 34,
        isSingle: true
    }
    // convert javascript object to JSON string first
    var personString = JSON.stringify(person)
    // create or overwrite the person.json file with the new JSON formatted string
    fs.writeFileSync('person.json', personString)
    
    /* uncomment this section after you have seen how the above code works
    // Read json from file
    var personStringFromFile = fs.readFileSync('person.json').toString()
    // convert json string to javascript object
    var personObjFromFile = JSON.parse(personStringFromFile)
    // update person age
    personObjFromFile.age = 60
    // save person again, convert person object to JSON string again first
    fs.writeFileSync('person.json', JSON.stringify(personObjFromFile))
    */ 
}
//jsonFileExample()
