import React, {useState} from 'react';
import TodoItem from './TodoItem';
import Input from '../Input';

export const Todo = ({todos, onChange}) => {
  const [value, setValue] = useState('');

  const handleCheck = (item) => {
    const newList = todos.map(i => i.value === item.value ?
      ({...i, checked: !item.checked}) : i)
    onChange(newList);
  };

  const handleDelete = (item) => {
    const newList = todos.filter(i => i.value !== item.value);
    onChange(newList);
  };

  const handleCreate = () => {
    onChange([
      ...todos.filter(i => i.value.toLowerCase() !== value.toLowerCase()),
      {value, checked: false}
    ]);
    setValue('');
  }

  const renderList = () => todos.map((item) => (
    <TodoItem
      key={item.value}
      value={item.value}
      checked={item.checked}
      onCheck={() => handleCheck(item)}
      onDelete={() => handleDelete(item)}
    />
  ));

  return (
    <div>
      <Input value={value} onChange={setValue} />
      <button onClick={handleCreate}>Submit</button>
      {renderList()}
    </div>
  )
};
