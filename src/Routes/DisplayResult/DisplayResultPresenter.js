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
                <img
                  style={{ marginBottom: '10px' }}
                  src={require('../../img/sample2.jpg').default}
                />
                <Information>
                  <Singer>
                    {song.singer[0].name} - {song.title}
                  </Singer>

                  <Text>{song.genre[0].name}</Text>
                  <Text>{song.explanation}</Text>
                </Information>
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
  font-size: 23px;
  font-family: 'ImcreSoojin';
`;
const Text = styled.div`
  margin-top: 6px;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'ImcreSoojin';
`;

const Information = styled.div`
  width: 90%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 10px;
  margin-bottom: 30px;
`;
export default DisplayResultPresenter;
