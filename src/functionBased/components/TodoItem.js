import React, { useState, useEffect } from 'react';
import { IoMdTrash } from 'react-icons/io';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const prop = props;
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const { completed, id, title } = prop.todo;

  useEffect(() => () => {}, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => prop.handleChangeProps(id)}
          className={styles.checkbox}
        />
        <button type="button" onClick={() => prop.deleteTodoProps(id)}>
          <IoMdTrash
            style={{ color: 'orangered', fontSize: '16px' }}
          />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {
          prop.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
        onBlur={() => setEditing(false)}
      />
    </li>
  );
};

export default TodoItem;
