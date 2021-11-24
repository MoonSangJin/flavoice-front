import React, { useState, useEffect } from 'react';
import DisplayResultPresenter from './DisplayResultPresenter';
import axios from 'axios';

const DisplayResultContainer = () => {
  const pitch = localStorage.getItem('pitch');
  const [songs, setSongs] = useState([]);
  let stringPitch = '';

  const pitchPost = async () => {
    try {
      const maxPitch = await axios.post(
        'https://flavoice.shop/api/v1/voices/',
        {
          max_pitch: String(parseInt(pitch) + 300),
          gender: 'F',
        }
      );
      console.log('노래 post요청', maxPitch);
      stringPitch = maxPitch.data.max_pitch;
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  const songApi = async () => {
    try {
      const songs = await axios.get('https://flavoice.shop/api/v1/songs/me/');
      console.log('노래 get요청', songs);

      const getSongs = songs.data.filter((song) => {
        return song.max_pitch === stringPitch;
      });

      setSongs(getSongs);
    } catch (e) {
      console.log('해당 음역대 노래 정보 없음');
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      pitchPost();
      songApi();
    }, 1000);
  }, []);

  return (
    <div>
      {console.log(pitch)}
      <DisplayResultPresenter {...{ songs }} myPitch={pitch} />
    </div>
  );
};

export default DisplayResultContainer;
