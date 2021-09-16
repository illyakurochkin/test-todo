import React from 'react';

const TodoItem = ({value, checked, onDelete, onCheck}) => (
  <div>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheck(e.target.value)}
    />
    <div>{value}</div>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default TodoItem;
