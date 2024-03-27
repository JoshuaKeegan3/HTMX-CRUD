type TodoItem = {
    id: number,
    title: string,
    completed: Boolean
}
type TodoData = {
    todos : TodoItem[],
    getNextId : Function,
    createTodo : Function,
    deleteTodo : Function,
    updateTodo: Function,
}
export const todoData : TodoData = {
    todos : [
        {
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": true
        },
        {
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ], 
    updateTodo: function () {
        return this.todos.sort((a:TodoItem,b:TodoItem) => b.id - a.id)[0].id + 1
    },
    getNextId: function () {
        return this.todos.sort((a:TodoItem,b:TodoItem) => b.id - a.id)[0].id + 1
    },
    createTodo: function (todoId: number){
        const otherTodos = this.todos.filter((todo:TodoItem) => todo.id !==todoId)
        const todo = this.todos.filter((todo:TodoItem)=>todo.id === todoId)[0]
        this.todos = [...otherTodos, {
            ...todo, completed:!todo.completed
        }]
        return this.todos
    },
    deleteTodo: function(todoId: number){
        this.todos = this.todos.filter((todo:TodoItem)=>todo.id!== todoId)[0]
        return this.todos
    }
}
