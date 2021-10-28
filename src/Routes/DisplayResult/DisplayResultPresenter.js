import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingVoicesIcon from '@mui/icons-material/SettingsVoice';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

SwiperCore.use([Pagination]);

const DisplayResultPresenter = ({ songs }) => {
  const history = useHistory();

  const moveTo = (target) => {
    history.push(`${target}`);
  };

  return (
    <>
      {!songs.length && (
        <CircularProgress
          style={{ position: 'fixed', left: '50%', top: '40%' }}
        />
      )}
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
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => moveTo('/')}
          />
          <BottomNavigationAction
            label="Recorder"
            icon={<SettingVoicesIcon />}
            onClick={() => moveTo('/recorder')}
          />
          <BottomNavigationAction
            label="My Song"
            icon={<FavoriteIcon />}
            onClick={() => moveTo('/displayResult')}
          />
        </BottomNavigation>
      </Paper>
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
