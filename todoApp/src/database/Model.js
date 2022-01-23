const db = require('./db')
const uuid = require('uuid')

class Model{
    static collectionKey = ''
    
    static get Id(){
        return uuid.v4()
    }
    
    static find(id, collectionKey = this.collectionKey){
        let data = db.readKey(collectionKey)

        for(let i = 0; i < data.length; i++){
    
            if(data[i].id == id)
                return new (this)(data[i])
        }

        return null
    }
    static all(collectionKey = this.collectionKey){
        return db.readKey(collectionKey)
    }
    static delete(id, collectionKey = this.collectionKey){
        let data = db.readKey(collectionKey)        
        let item = this.find(id)
        
        data = data.filter(item=> item.id != id)
        db.writeKey(collectionKey, data)

        return item
    }

    save(){
        let item = JSON.parse(JSON.stringify(this))
        let data = Model.all(this.collectionKey)
        data.push(item)
        db.writeKey(this.collectionKey, data)
        return this
    }
    update(){
        let data = db.readKey(this.collectionKey)

        for(let i = 0; i < data.length; i++){
    
            if(data[i].id == this.id){
                data[i] = JSON.parse(JSON.stringify(this))                
                db.writeKey(this.collectionKey, data)
                return true
            }
        }

        return false
    }
}

module.exports = Model