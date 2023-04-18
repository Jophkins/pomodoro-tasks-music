import React, {useContext, useEffect, useState} from 'react';

import styles from "./Nav.module.scss";
import {Context} from "../../pages/PomodorkoApp";
import locale from '../../utils/locale';
import SettingsModal from "../SettingsModal";

const Nav = ({setLanguage}) => {

  const language = useContext(Context);

  const [time, setTime] = useState(
    new Date().toLocaleString(locale[language.locale].nav.date, {dateStyle: "medium", timeStyle: "medium"}) + ""
  );

  const localeHandler = (event) => {
    setLanguage(event.target.value);
    localStorage.locale = JSON.stringify(event.target.value);
  }

  useEffect(() => {
    const refreshTime = () => {
      setTime(new Date().toLocaleString(locale[language.locale].nav.date, {dateStyle: "medium", timeStyle: "medium"}) + "");
    }
    const timerId = setInterval(refreshTime, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    }
  }, [language.locale]);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>{time}</li>
        <li>
          <SettingsModal />
        </li>
      </ul>
      <ul>
        <li>
          <select name="locale" onChange={localeHandler} value={''}>
            <option value={language.locale}>{language.locale === 'en' ? 'en' : 'ru'}</option>
            <option value={language.locale === 'en' ? 'ru' : 'en'}>{language.locale === 'en' ? 'ru' : 'en'}</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
