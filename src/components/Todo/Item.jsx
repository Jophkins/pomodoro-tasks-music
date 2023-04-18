import React from 'react';

import styles from './Todo.module.scss';

const Item = ({ todo, toggleTask, removeTask }) => {
  return (
    <div key={todo.id} className={todo.isComplete ? `${styles.todoWrapperItem} ${styles.todoWrapperItemDone}` : styles.todoWrapperItem }>
      <div
        className={todo.isComplete ? `${styles.todoWrapperItemText} ${styles.todoWrapperItemStrike}` : styles.todoWrapperItemText}
      >
        <svg onClick={() => toggleTask(todo.id)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
             className="cursor-pointer ml-2 dark:text-stone-600 text-slate-500" height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>
        {todo.task}
      </div>
      <div className={styles.todoWrapperItemDelete} onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
};

export default Item;
