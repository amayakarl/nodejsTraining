const fs = require('fs')

const db = {
    filename: __dirname + '/db.json', // the file path and name of the json file where we will save our data
    write(data){// will stringify any data we provide and save it to the db.json file
        
        fs.writeFileSync(db.filename, JSON.stringify(data))

    },
    writeKey(key, data){ // will update a specific key inside the JSON object and then overwrite to save the data back into the db.json file
        let allData = db.read()
        allData[key] = data
        db.write(allData)
    },
    readKey(key){// will read a specific key's data from the database, if the value is undefined or empty, then a empty array is returned
        let allData = db.read()
        return allData[key] ?? []
    },
    read(){// gets all the db.json's contents, if the file doesn't exist then an empty javascript object is returned and the file is created.
        if(fs.existsSync(db.filename)){
            return JSON.parse(fs.readFileSync(db.filename).toString())
        }
        else {
            fs.writeFileSync(db.filename, '{}')
            return {}
        }
    }

}

module.exports = db // we export our database driver