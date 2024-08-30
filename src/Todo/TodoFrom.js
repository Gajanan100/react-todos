
import './TodoFrom.css';
import{v4 as uuidv4} from 'uuid';
import React, { useState } from 'react'
import  List  from './List';


const TodoFrom = () => {
    const[text,setText]=useState("")
    const[todoList,setTodoList]=useState([])
    // console.log("text:",text);
    // function eventHandeler(e)
    // {
    //     setText(e.target.value)
    // }
    
    const addItem=()=>
    {
      const  newtodoItem={
            id:uuidv4(),
            item : text,
            done: false,
        };
       // setTodoList(todoList.push(newtodoItem))
        setTodoList([...todoList,newtodoItem])
        setText("")
    };
    // console.log("todolist:",todoList);

    const handleToggle=(itemid)=>{
       const newtodoList= todoList.map((listItem) => {
            if(listItem.id === itemid)
            {
                return{...listItem, done:!listItem.done};
            }
            return listItem;
        });
        setTodoList(newtodoList);
    };
    // console.log(todoList);

    const handleDelete=(itemId)=>{
      const newtodoList=  todoList.filter((listItem)=>listItem.id !==itemId);
        setTodoList(newtodoList)

    }

  return (
    <div className='g_todo'>
        <h1>To do list</h1>
        <div className='g_todo_from row '>
            <input  type="text" placeholder='Add Items to your list '  value={text} onChange={(e)=>setText(e.target.value)} required/>
            <span onClick={addItem}>+</span>
        </div>
        {todoList.length>0 &&
        <List todoList={todoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
        }
    </div>
  )
}

export default TodoFrom
