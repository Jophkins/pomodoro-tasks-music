import React, {useContext} from 'react';

import styles from './Todo.module.scss';
import Form from "./Form";
import Item from "./Item";
import AddBtn from "./AddBtn";
import {Context} from "../../App";

const Todo = ({setTodos}) => {
  const todos = useContext(Context);

  const updateStorage = (updatedItem) => {
    localStorage.todo = JSON.stringify(updatedItem);
  }

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        isComplete: false
      };
      setTodos([...todos.todo, newItem]);
      updateStorage([...todos.todo, newItem]);
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.todo.filter(todo => todo.id !== id)]);
    updateStorage([...todos.todo.filter(todo => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.todo.map(todo =>
        todo.id === id ? {...todo, isComplete: !todo.isComplete} : {...todo}
      )
    ]);
    updateStorage([
      ...todos.todo.map(todo =>
        todo.id === id ? {...todo, isComplete: !todo.isComplete} : {...todo}
      )
    ]);
  }

  const clearAll = () => {
    if (window.confirm('All tasks will be deleted')) {
      setTodos([]);
      updateStorage([]);
    }
  }


  return (
    <div className={styles.todo}>
      <div className={styles.todoWrapper}>
        <div className={styles.todoWrapperHeader}>
          <h1 className={styles.todoWrapperHeaderTitle}>Task tracker</h1>
          <AddBtn />
          <div className={`${styles.todoWrapperHeaderFormBlock} ${styles.hide}`}>
            <Form addTask={addTask}/>
          </div>
        </div>


        {todos.todo.length === 0 ?
          <div className={styles.todoWrapperNoTasks}>No Tasks to show</div>
          :
            todos.todo.map(todo => {
            return (
              <Item
                todo={todo}
                toggleTask={handleToggle}
                removeTask={removeTask}
                key={todo.id}
              />
            )
          })
        }

        {
          todos.todo.length > 0 &&
          <div className={styles.todoWrapperClearAllBlock}>
            <button onClick={clearAll} className={styles.todoWrapperClearAllBlockBtn}>Clear all</button>
          </div>
        }
      </div>
    </div>
  );
};

export default Todo;
