const express = require('express')
const server = express()
const TodoModel = require('./src/database/TodoModel')


// define middleware
server.use(express.static('assets'))
server.use(express.urlencoded({extended:false}))
server.use(express.json())

// get all notes
server.get('/todos', (request, response)=>{
    try{
        let data = TodoModel.all()
        return response.json({status: true, todos: data})
    }
    catch(error){
        return response.status(500).json({status: false, message: error.message })
    }
})

// get one note
server.get('/todos/:todoId', (request, response)=>{
    try{
        let todo = TodoModel.find(request.params.todoId)
        
        if(todo){

            return response.json({
                status:true,
                todo:todo
            })
        }

        throw new Error('Todo item not found')
    }
    catch(error){
        return response.json({
            status:false,
            message: error.message
        })
    }
})

// create new todo
server.post('/todos', (request, response)=>{
    
    try{
        let todoContent = request.body.content ?? ''

        if(todoContent.length == 0)
            throw new Error('content cannot be empty')
        
        let todo = new TodoModel({ content:todoContent })
        todo.save()

        return response.json({
            status:true,
            todo
        })
    }
    catch(error){
        return response.json({
            status:false,
            message:error.message
        })
    }
})

/**
 * Update a todo using a PUT request
 */
// your code here

/**
 * Delete a todo using a DELETE request
 */
// your code here

server.listen(3000, ()=> console.log('[+] server started on http://localhost:3000'))