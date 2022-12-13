import React, {useState} from 'react';
import styles from "./YoutubeMusic.module.scss";

const YoutubeMusic = ({placeholder}) => {

  const [youtubeInput, setYoutubeInput] = useState('');
  const [youtubeURL, setYoutubeURL] = useState(
    'https://www.youtube.com/embed/jfKfPfyJRdk'
  );

  const handleChange = (event) => {
    setYoutubeInput(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && youtubeInput) {
      youtubeVideoId(youtubeInput);
      setYoutubeInput('');
    } else {
      setYoutubeURL('https://www.youtube.com/embed/jfKfPfyJRdk');
    }
  }

  const youtubeVideoId = (url) => {
    const playlistId = url.replace('https://www.youtube.com/watch?v=', '').split('&').splice(0, 1);
    return setYoutubeURL(`https://www.youtube.com/embed/${playlistId}`);
  }

  return (
    <>
      <div className={styles.youtubeWrapper}>
        <div className={styles.youtubeWrapperPlaylist}>
          <iframe className={styles.video} width="560" height="315" src={youtubeURL} title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen/>
        </div>
      </div>
      <div className={styles.youtubeWrapperInput}>
        <input onChange={handleChange} onKeyDown={handleKeyPress} value={youtubeInput} type="text"
               placeholder={placeholder}/>
      </div>
    </>
  );
};

export default YoutubeMusic;
