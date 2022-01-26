const db = require('./db') // we pull in the database driver
const uuid = require('uuid') // we use the uuid package to create unique id's for our model instances

class Model{
    static collectionKey = '' // contains the key of the collection, think of it as a table name
    
    static get Id(){ // generates a new unique id
        return uuid.v4()
    }
    
    static find(id, collectionKey = this.collectionKey){ // will find a item in a collection using the id
        let data = db.readKey(collectionKey)

        for(let i = 0; i < data.length; i++){
    
            if(data[i].id == id)
                return new (this)(data[i]) // create a new instance of the Model using the data from the database
        }

        return null
    }
    static all(collectionKey = this.collectionKey){ // gets all the data for the current collection
        return db.readKey(collectionKey)
    }
    static delete(id, collectionKey = this.collectionKey){// will delete the item from the collection using the id from the database
        let data = db.readKey(collectionKey)        
        let item = this.find(id)
        
        data = data.filter(item=> item.id != id) // return all the items that don't have the id passed in, creates a new collection with the item being deleted missing.
        db.writeKey(collectionKey, data) // save the new collection

        return item
    }

    save(){ // will add the current instance of the model to the collection and save to the database
        let item = JSON.parse(JSON.stringify(this))
        let data = Model.all(this.collectionKey)
        data.push(item)
        db.writeKey(this.collectionKey, data)
        return this
    }
    update(){ // finds the item being updated in the database then updates it's content and then saves the changes to the database.
        let data = db.readKey(this.collectionKey)

        for(let i = 0; i < data.length; i++){
    
            if(data[i].id == this.id){
                data[i] = JSON.parse(JSON.stringify(this))   // convert the class instance to JSON string, then to a JavaScript object, not necessary, but good to do
                db.writeKey(this.collectionKey, data)
                return true
            }
        }

        return false
    }
}

module.exports = Model // we export our Model class