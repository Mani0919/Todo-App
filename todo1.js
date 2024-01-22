import React from "react";
import "./todo.css"
function Todo1({todos,DeleteHandler})
{
    return(
        <>
        {todos.map((todo,index)=>
        <div key={index}>
            <h5>{todo} &nbsp; &nbsp; <button onClick={()=>DeleteHandler(index)} className="btn btn-outline-danger btnn">Delete</button></h5>
            </div>)}
        </>
    )
}
export default Todo1;