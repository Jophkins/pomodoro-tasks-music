import React, {useState} from 'react';

import styles from './Todo.module.scss';
import Form from "./Form";
import Item from "./Item";
import AddBtn from "./AddBtn";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        isComplete: false
      };
      setTodos([...todos, newItem]);
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map(todo =>
        todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ]);
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


        {todos.length === 0 ?
          <div className={styles.todoWrapperNoTasks}>No Tasks to show</div>
          :
          todos.map(todo => {
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
      </div>
    </div>
  );
};

export default Todo;
