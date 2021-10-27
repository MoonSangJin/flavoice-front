import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';

SwiperCore.use([Pagination]);

const DisplayResultPresenter = () => {
  const [songs, setSongs] = useState([]);

  const songApi = async () => {
    try {
      const accsess_token = localStorage.getItem('token');
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accsess_token}`;

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
    <>
      <Link to="/">
        <BackButton />
      </Link>
      {!songs.length && <Text>로딩 중</Text>}
      {songs && (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          {songs.map((song, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={require('../../img/sample2.jpg').default} />
                <Singer>{song.singer[0].name}</Singer>
                <Title>{song.title}</Title>
                <Text>노래 음역대, 한줄 설명</Text>
                <WhiteBlank />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

const Singer = styled.div`
  font-size: 40px;
`;
const Title = styled.div`
  font-size: 25px;
`;
const Text = styled.div`
  font-size: 15px;
`;
const WhiteBlank = styled.div`
  height: 30px;
`;

export default DisplayResultPresenter;
