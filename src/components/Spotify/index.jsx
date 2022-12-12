import React, {useState} from 'react';

import styles from './Spotify.module.scss';

const Spotify = () => {

  const [spotifyInput, setSpotifyInput] = useState('');
  const [spotifyURL, setSpotifyURL] = useState(
    'https://open.spotify.com/embed/playlist/1MZIjTu5sQT11G4XNaoqes?si=66283f8de349433b&theme=0'
  );

  const handleChange = (event) => {
    setSpotifyInput(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      spotifyPlaylistId(spotifyInput);
      setSpotifyInput('');
    }
  }

  const spotifyPlaylistId = (url) => {
    const playlistId = url.replace('https://open.spotify.com/playlist/', '')
    return setSpotifyURL(`https://open.spotify.com/embed/playlist/${playlistId}&theme=0`)
  }

  return (
      <>
      <div className={styles.spotifyWrapper}>
        <div className={styles.spotifyWrapperPlaylist}>
          <iframe title="spot"
                  src={spotifyURL}
                  width="100%" height="380" allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"/>
        </div>
      </div>
      <div className={styles.spotifyWrapperInput}>
        <input onChange={handleChange} onKeyDown={handleKeyPress} value={spotifyInput} type="text" placeholder='CTRL-V spotify playlist URL here and hit Enter'/>
      </div>
      </>
  );
};

export default Spotify;
