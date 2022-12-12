import React, {useState} from 'react';
import styles from "./MusicPlayer.module.scss";
import Spotify from "../Spotify";
import YandexMusic from "../YandexMusic";

const MusicPlayer = () => {

  const [titleTabsToggler, setTitleTabsToggler] = useState(1);

  const tabsHandler = (tabNumber) => {
    setTitleTabsToggler(tabNumber);
  }

  return (<div className={styles.musicPlayer}>
    <div className={styles.musicPlayerWrapper}>
      <div className={styles.musicPlayerWrapperTitle}>
        <span onClick={() => tabsHandler(1)}>YaMusic</span>
        <span onClick={() => tabsHandler(2)}>Spotify</span>
        <span onClick={() => tabsHandler(3)}>YouTube</span>
      </div>
      <div className={(titleTabsToggler === 1 ? styles.activeContent : styles.content)}>
        <YandexMusic />
      </div>
      <div className={(titleTabsToggler === 2 ? styles.activeContent : styles.content)}>
        <Spotify/>
      </div>
      <div className={(titleTabsToggler === 3 ? styles.activeContent : styles.content)}>
        YOUTUBE
      </div>
    </div>
  </div>);
};

export default MusicPlayer;
