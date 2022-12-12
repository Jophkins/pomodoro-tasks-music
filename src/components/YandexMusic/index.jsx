import React, {useState} from 'react';
import styles from "./YandexMusic.module.scss";

const YandexMusic = () => {

  const [yandexInput, setYandexInput] = useState('');
  const [yandexURL, setYandexURL] = useState(
    'https://music.yandex.ru/iframe/#playlist/TheChilledCow/1000'
  );

  // https://music.yandex.ru/users/TheChilledCow/playlists/1000
  // https://music.yandex.ru/users/pitwithmagic/playlists/1002

  const handleChange = (event) => {
    setYandexInput(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      yandexPlaylistId(yandexInput);
      setYandexInput('');
    }
  }

  const yandexPlaylistId = (url) => {
    const playlistId = url.replace('https://music.yandex.ru/users/', '').replace('playlists', '').split('/')
    return setYandexURL(`https://music.yandex.ru/iframe/#playlist/${playlistId[0]}/${playlistId[2]}`)
  }

  return (
    <>
      <div className={styles.yandexWrapper}>
        <div className={styles.yandexWrapperPlaylist}>
          <iframe width="100%" height="450" title='Yandex Music'
                  src={yandexURL}/>

        </div>
      </div>
      <div className={styles.yandexWrapperInput}>
        <input onChange={handleChange} onKeyDown={handleKeyPress} value={yandexInput} type="text"
               placeholder='CTRL-V yandex playlist URL here and hit Enter'/>
      </div>
    </>
  );
};

export default YandexMusic;
