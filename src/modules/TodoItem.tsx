import React from 'react';

interface TodoProps {
    title: string
}

function TodoItem({ title }: TodoProps) {
  return <div className="todo-item">
        <span>{title}</span> <button type="button">delete</button>
    </div>
}

export default TodoItem;