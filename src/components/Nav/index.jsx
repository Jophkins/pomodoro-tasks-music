import React, {useEffect, useState} from 'react';

import styles from "./Nav.module.scss";

const Nav = () => {

  const [time, setTime] = useState(new Date().toLocaleString('en-US', {dateStyle: "long", timeStyle: "medium"}) + "");

  const refreshTime = () => {
    setTime(new Date().toLocaleString('en-US', {dateStyle: "long", timeStyle: "medium"}) + "");
  }

  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    }
  }, []);


  return (
    <nav className={styles.nav}>
      <ul>
        <li>{time}</li>
        <li>Background</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

export default Nav;
