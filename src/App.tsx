import React, { useState, useEffect } from "react";
import TodoItem from "./modules/TodoItem";
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')

    useEffect(() => {
        console.log('render todo list')
    })
    useEffect(() => {
        console.log('didMount')
    },[todos])
    const handleAddButton = () => {
        console.log('todoTitle', todoTitle)
        console.log('todos', todos)
        setTodos([...todos, {
            id: Date.now(),
            title: todoTitle
        }] )
        //setTodos(newArr)
    }
  return (
    <div className="todo-list">
      <h1>TODOS list</h1>
        <div className="todo-input-container">
            <input type="text" onInput={(e) => {setTodoTitle(e.currentTarget.value)}}  placeholder="input todo"/>
            <button onClick={handleAddButton}>add</button>
        </div>
      {!!todos.length && todos.map((item => (
          <TodoItem key={uuid()} title={item.title} />
      )))}
    </div>
  );
}

export default App;