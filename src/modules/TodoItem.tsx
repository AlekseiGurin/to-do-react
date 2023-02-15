import React from 'react';

interface todoProps {
    title: string
}

function TodoItem({ title }: todoProps) {
  return <div className="todo-item">
        <span>{title}</span> <button type="button">delete</button>
    </div>
}

export default TodoItem;