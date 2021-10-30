import React, { useState, useEffect } from 'react';
import DisplayResultPresenter from './DisplayResultPresenter';
import axios from 'axios';
import * as fs from 'fs';

const DisplayResultContainer = () => {
  const pitch = localStorage.getItem('pitch');
  const [songs, setSongs] = useState([]);

  const pitchPost = async () => {
    try {
      const maxPitch = await axios.post(
        'https://flavoice.shop/api/v1/voices/',
        {
          //max_pitch: String(parseInt(pitch)),
          max_pitch: '900',
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
      checkImgExist(songs.data);
    } catch (e) {
      console.log(e);
    }
  };

  const checkImgExist = (song) => {
    console.log(song);
    const checkExistList = song.map((item) => {
      fs.existsSync(`../../img/${item.singer[0].name}.jpg`);
    });
    console.log(checkExistList);
  };
  useEffect(() => {
    setTimeout(() => {
      pitchPost();
      songApi();
    }, 50);
  }, []);

  return (
    <div>
      {console.log(pitch)}
      <DisplayResultPresenter {...{ songs }}></DisplayResultPresenter>
    </div>
  );
};

export default DisplayResultContainer;
