import React from "react";

//To Do list item
const TodoListItem=(props)=>{
    console.log(props)
    return(
        <div className="todo-list-item">
            <input type="checkbox" checked={props.completed}/>
            <span>{props.title}</span>
           <button onClick={()=>props.deleteTodoByIndex(props.index)}>Delete To do</button>
        </div>
    )
}

export default TodoListItem