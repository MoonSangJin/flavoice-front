import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingVoicesIcon from '@mui/icons-material/SettingsVoice';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import imgSrcObject from '../../img/imgSrc';

SwiperCore.use([Pagination]);

const DisplayResultPresenter = ({ songs }) => {
  const history = useHistory();
  const moveTo = (target) => {
    history.push(`${target}`);
  };

  return (
    <>
      {!songs.length && (
        <div
          style={{
            width: '37.5rem',
            position: 'fixed',
            top: '40%',
            textAlign: 'center',
          }}
        >
          <CircularProgress />
          <Warning>당신의 음역대를 분석 중입니다.</Warning>
          <Warning>메인 화면에서 pitch가 확인되지 않는다면</Warning>
          <Warning>재녹음을 진행해주세요</Warning>
        </div>
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
                  style={{
                    marginBottom: '10px',
                  }}
                  src={
                    imgSrcObject[song.singer[0].name] || imgSrcObject['default']
                  }
                  alt="가수이미지"
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
        style={{ zIndex: '5' }}
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
const Warning = styled.div`
  font-family: 'ImcreSoojin';
  font-size: 1.5rem;
  margin-top: 30px;
  width: 100%;
`;
const Information = styled.div`
  width: 90%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 10px;
  margin-bottom: 30px;
`;
export default DisplayResultPresenter;
