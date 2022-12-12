import React, {useEffect, useState} from 'react';

import styles from "./Nav.module.scss";

const Nav = () => {

  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().toLocaleString() + "")
  }, [time])


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
