import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo1 from './todo1';
import "./todo.css"
function Todo()
{
    const [task,setTask]=useState("")
    const [todo,setTodo]=useState([])
    const changeHandler=e=>{
        setTask(e.target.value)
    }
    const submitHandler=e=>
    {
        e.preventDefault();
        const newTodo=[...todo,task]
        setTodo(newTodo);
        setTask("")
    }
    const DeleteHandle=(indexvalue)=>
    {
        const newt=todo.filter((todo,index)=>index!==indexvalue)
        setTodo(newt)
    }
    return(
        <>
        <center>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title' color='text-primary'>Todo List</h5>
                <form onSubmit={submitHandler}>
                    <input type='text' value={task} onChange={changeHandler}  />&nbsp;&nbsp;
                    <input type='submit' value="add" className='btn btn-outline-primary' />
                </form>
                <br/>
                <Todo1 todos={todo} DeleteHandler={DeleteHandle}/>
            </div>
        
        </div>
        </center>
        </>
    )
}
export default Todo;