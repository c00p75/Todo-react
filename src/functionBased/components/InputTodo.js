import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const prop = props;
  const [task, setTask] = useState('');

  const onChange = (e) => { setTask(e.target.value); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      prop.addTodoProps(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={task}
        name="task"
        onChange={onChange}
        className="input-text"
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};
export default InputTodo;
