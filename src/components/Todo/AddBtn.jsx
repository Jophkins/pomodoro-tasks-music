import React, {useState} from 'react';
import styles from "./Todo.module.scss";

const AddBtn = ({close, add}) => {

  const [btnToggle, setBtnToggle] = useState(false);

  const addHandler = () => {
    setBtnToggle(!btnToggle);
    document.querySelector(`.${styles.todoWrapperHeaderFormBlock}`).classList.toggle(styles.hide);
    document.querySelector(`.${styles.todoWrapperHeaderFormBtn}`).classList.toggle(styles.btnClose);
  }

  return (
    btnToggle ?
      <button onClick={addHandler} className={styles.todoWrapperHeaderFormBtn}>{close}</button>
      :
      <button onClick={addHandler} className={styles.todoWrapperHeaderFormBtn}>{add}</button>
  );
};

export default AddBtn;
