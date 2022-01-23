// get all todos
document.getElementById('getAllBtn').addEventListener('click', function(e){


    axios.get('/todos')
            .then(response=>response.data)
            .then(data=>{

                document.getElementById('allResult').value = JSON.stringify(data, null, 4)
            })
            .catch(err=>{
                document.getElementById('allResult').value = err.message
                console.log(err)
            })
})

// get one todos
document.getElementById('getOneBtn').addEventListener('click', function(e){

    let todoId = document.getElementById('todo-id')
    if(!todoId.value && todoId.value.length <= 0 ){

        alert('todo id cannot be left blank when getting a single todo')
        return
    }

    axios.get('/todos/'+todoId.value)
            .then(response=>response.data)
            .then(data=>{

                document.getElementById('oneResult').value = JSON.stringify(data, null, 4)
            })
            .catch(err=>{
                document.getElementById('oneResult').value = err.message
                console.log(err)
            })
})

// create todo
document.getElementById('createBtn').addEventListener('click', function(e){

    let content = document.getElementById('content')
    if(!content.value && content.value.length <= 0 ){

        alert('todo content cannot be left blank or empty')
        return
    }

    axios.post('/todos', {content: content.value})
            .then(response=>response.data)
            .then(data=>{
                document.getElementById('createResult').value = JSON.stringify(data, null, 4)
            })
            .catch(err=>{
                document.getElementById('createResult').value = err.message
                console.log(err)
            })
})

// get one todos
document.getElementById('deleteOneBtn').addEventListener('click', function(e){

    let todoId = document.getElementById('todo-id-del')
    if(!todoId.value && todoId.value.length <= 0 ){

        alert('todo id cannot be left blank when deleting a todo')
        return
    }

    axios.delete('/todos/'+todoId.value)
            .then(response=>response.data)
            .then(data=>{

                document.getElementById('deleteResult').value = JSON.stringify(data, null, 4)
            })
            .catch(err=>{
                document.getElementById('deleteResult').value = err.message
                console.log(err)
            })
})
// Update todo
document.getElementById('updateBtn').addEventListener('click', function(e){

    let todoId = document.getElementById('todo-id-update')
    
    if(!todoId.value && todoId.value.length <= 0 ){

        alert('todo id cannot be left blank when updating a todo')
        return
    }
    
    let content = document.getElementById('content-update')
    
    if(!content.value && content.value.length <= 0 ){

        alert('todo content cannot be left blank when updating a todo')
        return
    }
    
    axios.put('/todos/'+todoId.value, {
        content: content.value
    })
        .then(response=>response.data)
        .then(data=>{

            document.getElementById('updateResult').value = JSON.stringify(data, null, 4)
        })
        .catch(err=>{
            document.getElementById('updateResult').value = err.message
            console.log(err)
        })
})