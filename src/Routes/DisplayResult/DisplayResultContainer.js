import React, { useState, useEffect } from 'react';
import DisplayResultPresenter from './DisplayResultPresenter';
import axios from 'axios';

const DisplayResultContainer = () => {
  const pitch = localStorage.getItem('pitch');
  const [songs, setSongs] = useState([]);

  const pitchPost = async () => {
    try {
      const maxPitch = await axios.post(
        'https://flavoice.shop/api/v1/voices/',
        {
          max_pitch: String(parseInt(pitch)),
          //max_pitch: '800',
        }
      );
      console.log('피치 post요청', maxPitch);
    } catch (e) {
      console.log(e);
    }
  };

  const songApi = async () => {
    try {
      const songs = await axios.get('https://flavoice.shop/api/v1/songs/me/');
      console.log('노래 get요청', songs);
      setSongs(songs.data);
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
      <DisplayResultPresenter {...{ songs }}></DisplayResultPresenter>
    </div>
  );
};

export default DisplayResultContainer;
