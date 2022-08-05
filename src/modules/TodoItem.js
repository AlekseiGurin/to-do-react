import React from 'react';

const TodoItem = ({ title }) => (
    <div style={{ borderRadius: '1px solid black', marginBottom: 10, display: 'flex' }}>
        <span>{title}</span> <button>delete todo</button>
    </div>
);

export default TodoItem;