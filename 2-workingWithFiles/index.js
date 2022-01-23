/**
 * fs is a built in node package, you don't need to use npm to install it
 * fs stands for file system
 * More on fs: https://nodejs.org/api/fs.html
 */
const fs = require('fs') // we require the fs package for use in this file


function writeFile(stringData, filename){
    // we use the writeFileSync method to create and write to a file
    // writeFileSync by default will overwrite file content
    fs.writeFileSync(filename, stringData)
}
function readFile(filename){
    // we use existsSync to see if the file we want to read from exists
    if(fs.existsSync(filename)){
        // use readFileSync method to read from a file, readFileSync returns a buffer, we can then convert the buffer to string
       return fs.readFileSync(filename).toString() 
    }

    return ''
}

function main(){
    // create .txt file with hello world as content
    writeFile('hello world :)', 'hello.txt')

    // read from the .txt file we just created
    const fileContent = readFile('hello.txt')
    console.log(fileContent)

}
main()
