import React, {useContext, useState} from 'react';
import styles from "./MusicPlayer.module.scss";
import Spotify from "../Spotify";
import YandexMusic from "../YandexMusic";
import YoutubeMusic from "../YoutubeMusic";
import {Context} from "../../App";
import locale from "../../utils/locale";

const MusicPlayer = () => {

  const language = useContext(Context);
  const [titleTabsToggler, setTitleTabsToggler] = useState(1);

  const tabsHandler = (tabNumber) => {
    setTitleTabsToggler(tabNumber);
  }

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.musicPlayerPopupParent}>
        <div className={styles.musicPlayerPopupParentChild}>
          {locale[language.locale].musicPlayer.popup}
        </div>
      </div>
    <div className={styles.musicPlayerWrapper}>
      <div className={styles.musicPlayerWrapperTitle}>
        <span onClick={() => tabsHandler(1)} className={(titleTabsToggler === 1 ? `${styles.activeTab} ${styles.yandexColor}` : styles.tab)}>YaMusic</span>
        <span onClick={() => tabsHandler(2)} className={(titleTabsToggler === 2 ? `${styles.activeTab} ${styles.spotifyColor}` : styles.tab)}>Spotify</span>
        <span onClick={() => tabsHandler(3)} className={(titleTabsToggler === 3 ? `${styles.activeTab} ${styles.youtubeColor}` : styles.tab)}>YouTube</span>
      </div>
      <div className={(titleTabsToggler === 1 ? styles.activeContent : styles.content)}>
        <YandexMusic placeholder={locale[language.locale].musicPlayer.inputYa} />
      </div>
      <div className={(titleTabsToggler === 2 ? styles.activeContent : styles.content)}>
        <Spotify placeholder={locale[language.locale].musicPlayer.inputSp}/>
      </div>
      <div className={(titleTabsToggler === 3 ? styles.activeContent : styles.content)}>
        <YoutubeMusic placeholder={locale[language.locale].musicPlayer.inputYou}/>
      </div>
    </div>
  </div>
  );
};

export default MusicPlayer;
