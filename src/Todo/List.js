
import React from 'react'
import './List.css'
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ImCross } from "react-icons/im";






const List = ({todoList,handleToggle,handleDelete}) => {
  return( <ul className='g_list'>
        {todoList.map((listItem)=>(
                <li key={listItem.id} className={listItem.done ? "done":""} >
                       <span>{listItem.item}</span>
                       <span className=' gap-4 text-end actions'>
                        {
                            listItem.done?<ImCross onClick={()=>handleToggle(listItem.id)}/>:
                            <FaCheckCircle onClick={()=>handleToggle(listItem.id)}/>

                        }
                        <MdDeleteForever onClick={()=>handleDelete(listItem.id)}/>
                       </span>
                </li>
            
            )) }
    </ul>
  )
}

export default List