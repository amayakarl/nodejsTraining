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

server.delete('/todos/:todoId', (request, response)=>{
    try{
        let todo = TodoModel.find(request.params.todoId)
        if(todo){

            TodoModel.delete(request.params.todoId)
            return response.json({
                status:true,
                message: 'todo removed successfully',
                todo
            })
        }

        throw new Error('todo not found')
    }
    catch(error){
        return response.json({
            status: false,
            message: error.message
        })
    }
})

server.put('/todos/:todoId', (request, response)=>{
    try{
        let content = request.body.content ?? ''
        if(content.length == 0)
            throw new Error('todo content cannot be blank or empty')

        let todo = TodoModel.find(request.params.todoId)
        todo.content = content
        todo.update()
        return response.json({
            status:true,
            message:'Todo content updated successfully',
            todo
        })
    }
    catch(error){
        return response.json({
            status: false,
            message: error.message
        })
    }
})

server.listen(3000, ()=> console.log('[+] server started on http://localhost:3000'))