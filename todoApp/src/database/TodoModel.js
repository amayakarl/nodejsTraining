const Model = require('./Model') // we bring in our Model class so we can inherit from it

class Todo extends Model{ // we create a Todo Model class
    
    static{
        this.collectionKey = 'todo' // sets the key name for the todo class, like setting the table name
    } 

    constructor(todoitem){
        super() // calls the parent constructor
        
        // we first make sure the data being passed to the constructor is valid.
        if(typeof todoitem != "object"){
            throw new Error('No todo item data passed on constructor')
        }
        if(typeof todoitem.content != "string"){
            throw new Error('Todo item does not contain any content')
        }

        // we define and set our class properties, like defining our table columns
        this.content = todoitem.content
        this.created_ts = (new Date()).toISOString()
        this.id = todoitem.id ?? Model.Id // if the todoitem object passed in has an id then we use that, if not we create a new one.

    }
    get collectionKey(){ // we set the table name again, as a property, for use within the static methods of the Model Class
        return 'todo'
    }
}

module.exports = Todo // we export our Todo Model to be used in our controller