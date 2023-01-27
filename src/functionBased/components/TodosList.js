import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const prop = props;
  return (
    <ul>
      {prop.todos.map((i) => (
        <TodoItem
          key={i.id}
          todo={i}
          handleChangeProps={prop.handleChangeProps}
          deleteTodoProps={prop.deleteTodoProps}
          setUpdate={prop.setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;
