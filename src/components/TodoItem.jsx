import React from 'react';
import { FaCheck, FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem = () => {
  return (
    <div>
      <span>Do the dishes</span>
      <FaCheck style={{ color: 'green', cursor: 'pointer' }} />
      <FaEdit style={{ color: 'blue', cursor: 'pointer' }} />
      <FaTrash style={{ color: 'red', cursor: 'pointer' }} />
    </div>
  );
};

export default TodoItem;
