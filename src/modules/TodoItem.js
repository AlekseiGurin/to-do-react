import React from 'react';

const TodoItem = ({ title }) => (
    <div className="todo-item">
        <span>{title}</span> <button>delete</button>
    </div>
);

export default TodoItem;