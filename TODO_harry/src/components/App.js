import React, {useState} from 'react'
import {Header} from './Header'
import ToDos from './ToDos'
import { Footer } from './footer'


export default function App() {
  const onDelete = (todo) =>{
    console.log("I am on delete of todo",todo);
    // Deleting this way in react doesnt work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter ((e)=>{
      return e!==todo;

    }))
  }
  const [todos,setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You  need to visit to get this job done before time"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You  need to visit to get this job done before time"
    },
    {
      sno: 3,
      title: "Go to the laundry",
      desc: "You  need to visit to get this job done before time"
    }
  ]);

  return (
    <div>
      <Header />
      <ToDos todos={todos} onDelete={onDelete}/>
      <Footer />
      
    </div>
  )
}
