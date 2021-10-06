import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Text from '../../Components/Text';
import Form from '../../Components/Form';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import Padding from '../../Components/Padding';

const StyledButton = styled.button`
  color: ${palette.white};
  background-color: ${palette.clude};
  border: none;
  width: 145px;
  height: 60px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  &:hover {
    font-weight: 700;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: ${palette.gray[100]};
      color: ${palette.gray[200]};
      font-weight: 800;
    `};
`;

const Container = styled.div`
  display: flex;
`;

const RecorderPresenter = ({ status, onStart, onStop, mediaBlobUrl }) => {
  return (
    <>
      <Link to="/">
        <BackButton />
      </Link>
      <Form style={{ alignItems: 'center' }}>
        <Padding height={32} />
        {status === 'recording' ? (
          <Text>녹음 중</Text>
        ) : status === 'stopped' ? (
          <Text>녹음 끝</Text>
        ) : status === 'acquiring_media' ? (
          <Text>잠시 기다려 주세요.</Text>
        ) : (
          <Text style={{ visibility: 'hidden' }}>녹음 </Text>
        )}
        <Padding height={32} />
        <Container>
          {status === 'acquiring_media' ? (
            <>
              <StyledButton style={{ marginRight: '10px' }}>
                녹음 시작
              </StyledButton>
              <StyledButton onClick={onStop}>녹음 종료</StyledButton>
            </>
          ) : (
            <>
              <StyledButton
                onClick={onStart}
                style={{ marginRight: '10px' }}
                active={status === 'recording'}
              >
                녹음 시작
              </StyledButton>
              <StyledButton onClick={onStop} active={status === 'stopped'}>
                녹음 종료
              </StyledButton>
            </>
          )}
        </Container>
        <Padding />
        {status === 'stopped' ? (
          <audio
            src={mediaBlobUrl}
            style={{ width: '400px', height: '100px' }}
            controls
          />
        ) : (
          <video style={{ visibility: 'hidden' }} controls />
        )}
        <Padding height={32} />
        <StyledButton style={{ width: '65%' }}>녹음한 파일보내기</StyledButton>
      </Form>
    </>
  );
};

export default RecorderPresenter;
