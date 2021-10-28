import React, { useState, useEffect } from 'react';
import DisplayResultPresenter from './DisplayResultPresenter';
import axios from 'axios';

const DisplayResultContainer = () => {
  const [songs, setSongs] = useState([]);
  const songApi = async () => {
    try {
      const songs = await axios.get('https://flavoice.shop/api/v1/songs/me/');
      console.log('api 데이터', songs.data);
      setSongs(songs.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    songApi();
  }, []);

  return (
    <div>
      <DisplayResultPresenter {...{ songs }}></DisplayResultPresenter>
    </div>
  );
};

export default DisplayResultContainer;
