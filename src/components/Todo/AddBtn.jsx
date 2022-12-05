import React, {useState} from 'react';
import styles from "./Todo.module.scss";

const AddBtn = () => {

  const [btnToggle, setBtnToggle] = useState(false);

  const addHandler = () => {
    setBtnToggle(!btnToggle);
    document.querySelector(`.${styles.todoWrapperHeaderFormBlock}`).classList.toggle(styles.hide);
    document.querySelector(`.${styles.todoWrapperHeaderFormBtn}`).classList.toggle(styles.btnClose);
  }

  return (
    btnToggle ?
      <button onClick={addHandler} className={styles.todoWrapperHeaderFormBtn}>Close</button>
      :
      <button onClick={addHandler} className={styles.todoWrapperHeaderFormBtn}>Add</button>
  );
};

export default AddBtn;
