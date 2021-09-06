import React, { useState } from 'react'
import { AddTodo, RemoveTodo, DeleteTodo } from '../Actions/actions'
import { useDispatch ,useSelector } from 'react-redux'
import '../App.css'

function Todo() {

    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
    const list = useSelector((state) => state.Reducer.list)
    return (
        <div className='todo'>
            <h1>Add your todos</h1>
            <div className='todo_input'>
                <input value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder='Add todos here' />
                <button onClick={() => dispatch(AddTodo(inputData))} className='add'>add</button>
            </div>
            <div>
                {list.map((e) => {
                    return(
                        <div key={e.id}> 
                            <h3>{e.data}</h3>
                            <button onClick={() => dispatch(DeleteTodo(inputData))}>delete</button>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Todo
