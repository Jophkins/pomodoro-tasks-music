import React, {useState} from 'react';

import styles from './Todo.module.scss';

const Form = ({ addTask, placeholder, save }) => {

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput('');
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.todoWrapperHeaderFormBlockInput}
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        maxLength='35'
      />
      <button className={styles.todoWrapperHeaderFormBlockBtn}>{save}</button>
    </form>
  );
};

export default Form;
