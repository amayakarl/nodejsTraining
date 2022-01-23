const Model = require('./Model')

class Todo extends Model{
    
    static{
        this.collectionKey = 'todo'
    } 

    constructor(todoitem){
        super()
        
        if(typeof todoitem != "object"){
            throw new Error('No todo item data passed on constructor')
        }
        if(typeof todoitem.content != "string"){
            throw new Error('Todo item does not contain any content')
        }

        this.content = todoitem.content
        this.created_ts = (new Date()).toISOString()
        this.id = todoitem.id ?? Model.Id

    }
    get collectionKey(){
        return 'todo'
    }
}

module.exports = Todo