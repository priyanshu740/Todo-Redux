const initialState = {
    list:[]
}

export const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_TODO':
            const {id,data} = action.payload
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                    id:id,
                    data:data
                }]

            }
            default : return state
    }
}
export default todoReducer;