
export const AddTodo = (data) => {
    return{
        type:'ADD_TODO',
        payload: {
            id:Math.floor(Math.random()),
            data:data
        }
    }
}
export const RemoveTodo = () => {
    return{
        type:'REMOVE_TODO'
    }
}
export const DeleteTodo = () => {
    return{
        type:'DELETE_TODO'
    }
}