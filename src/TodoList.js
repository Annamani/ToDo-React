import React from "react";
import TodoListItem from './TodoListItem';
import  './Styles.css';


export default class TodoList extends React.Component{
    constructor(){
        super()
        this.state={
        list_title:"",
        current_value:"",
        todos:[
            // {
            //     title:'Go Jogging',
            //     completed:false
            // },
            // {
            //     title:'Reading',
            //     completed:true
            // }
        ]
    }
    this.deleteTodoByIndex=this.deleteTodoByIndex.bind(this) 
   }
    
    deleteTodoByIndex(index){
        // console.log('index,',index);
        this.setState(prevState=>(
            {
                todos:
                [...prevState.todos.slice(0,index),
                ...prevState.todos.slice(index+1)],
            }
        )

        )
    }
    render(){
        return (
        <div className="todo-list">
            <h2>Todo List</h2>
            <label>Title</label>
            <br/>
            <input 
                placeholder="Enter title.." 
                type="text" 
                value={this.state.list_title}
                onChange={(event)=>{this.setState({list_title:event.target.value})

                }}
                />
            <br/>
            {
                this.state.todos.map((todo,index) =>{
                    return(
                        <TodoListItem 
                        key={index}
                        index={index}
                        deleteTodoByIndex={this.deleteTodoByIndex} 
                        title={todo.title} 
                        completed={todo.completed}/>                    
                    )
                })
            }
            <input 
                placeholder="Enter Todo List.."     
                type="text"
                value={this.state.current_value}
                onChange={(event)=>{this.setState({current_value:event.target.value})}}
                
                />
            <br/>
            <button 
            onClick={()=>
                {
                    this.setState(prevState=>
                    ({
                        todos:prevState.todos.concat(
                            {title:this.state.current_value,completed:false}
                        ),
                        current_value:""
                    }))
                }}>Add item to List</button>
        </div>
        )
    }
}