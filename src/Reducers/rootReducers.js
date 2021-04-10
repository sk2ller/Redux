const rootReducer = (state={todo:['buddy','doge']},action) =>{
    if(action.type== 'Add'){
        return state= {todo:[...state.todo, action.payLoad]}
    }
    else 
    return  state

}


export default rootReducer