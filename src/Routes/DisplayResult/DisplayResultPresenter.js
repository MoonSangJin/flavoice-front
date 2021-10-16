import React from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';

SwiperCore.use([Pagination]);

const DisplayResultPresenter = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={require('../../img/sample1.jpg').default} />
        <Singer>가수이름1</Singer>
        <Title>앨범 제목1</Title>
        <Text>노래 음역대, 한줄 설명</Text>
        <WhiteBlank />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../img/sample2.jpg').default} />
        <Singer>가수이름2</Singer>
        <Title>앨범 제목2</Title>
        <Text>노래 음역대, 한줄 설명</Text>
        <WhiteBlank />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../img/sample3.jpg').default} />
        <Singer>가수이름3</Singer>
        <Title>앨범 제목3</Title>
        <Text>노래 음역대, 한줄 설명</Text>
        <WhiteBlank />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../img/sample4.png').default} />
        <Singer>가수이름4</Singer>
        <Title>앨범 제목4</Title>
        <Text>노래 음역대, 한줄 설명</Text>
        <WhiteBlank />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../../img/sample5.jfif').default} />
        <Singer>가수이름5</Singer>
        <Title>앨범 제목5</Title>
        <Text>노래 음역대, 한줄 설명</Text>
        <WhiteBlank />
      </SwiperSlide>
    </Swiper>
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
