import React from 'react'
import { ToDoItems } from './ToDoItems'

export default function ToDos(props) {
    return (
        <div className='mt-4 mx-3'>

            <h3 className='my-3'>TO DOs</h3>


            {props.todos.length===0?"No Todos to  display":
            props.todos.map((todo) => {
                console.log(todo.sno);
                return (<ToDoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            })

            }



        </div>
    )
}
