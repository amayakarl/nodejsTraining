/**
 * fs is a built in node package, you don't need to use npm to install it
 * fs stands for file system
 * More on fs: https://nodejs.org/api/fs.html
 */
const fs = require('fs') // we require the fs package for use in this file


function main(){
    // we use the writeFileSync method to create and write to a file
    // writeFileSync by default will overwrite file content
    fs.writeFileSync('hello.txt', 'hello world :)')

    // we use existsSync to see if the file we want to read from exists
    if(fs.existsSync('hello.txt')){
        // use readFileSync method to read from a file, readFileSync returns a buffer, we can then convert the buffer to string
        var fileContent = fs.readFileSync('hello.txt').toString() 
    }
    else{
        var fileContent = 'No file found'
    }

    console.log(fileContent)

}
main()
