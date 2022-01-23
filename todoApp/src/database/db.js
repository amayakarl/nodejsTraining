const fs = require('fs')

const db = {
    filename: __dirname + '/db.json',
    write(data){
        
        fs.writeFileSync(db.filename, JSON.stringify(data))

    },
    writeKey(key, data){
        let allData = db.read()
        allData[key] = data
        db.write(allData)
    },
    readKey(key){
        let allData = db.read()
        return allData[key] ?? []
    },
    read(){
        if(fs.existsSync(db.filename)){
            return JSON.parse(fs.readFileSync(db.filename).toString())
        }
        else {
            fs.writeFileSync(db.filename, '{}')
            return {}
        }
    }

}

module.exports = db