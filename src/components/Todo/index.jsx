import React, {useContext} from 'react';

import styles from './Todo.module.scss';
import Form from "./Form";
import Item from "./Item";
import AddBtn from "./AddBtn";
import {Context} from "../../App";
import locale from "../../utils/locale";

const Todo = ({setTodos}) => {
  const language = useContext(Context);
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
    if (window.confirm(locale[language.locale].todo.confirm)) {
      setTodos([]);
      updateStorage([]);
    }
  }


  return (
    <div className={styles.todo}>
      <div className={styles.todoWrapper}>
        <div className={styles.todoWrapperHeader}>
          <h1 className={styles.todoWrapperHeaderTitle}>{locale[language.locale].todo.title}</h1>
          <AddBtn add={locale[language.locale].todo.add} close={locale[language.locale].todo.close}/>
          <div className={`${styles.todoWrapperHeaderFormBlock} ${styles.hide}`}>
            <Form addTask={addTask} placeholder={locale[language.locale].todo.placeholder} save={locale[language.locale].todo.save}/>
          </div>
        </div>


        {todos.todo.length === 0 ?
          <div className={styles.todoWrapperNoTasks}>{locale[language.locale].todo.noTasks}</div>
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
            <button onClick={clearAll} className={styles.todoWrapperClearAllBlockBtn}>{locale[language.locale].todo.clear}</button>
          </div>
        }
      </div>
    </div>
  );
};

export default Todo;
