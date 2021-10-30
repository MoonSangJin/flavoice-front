import React from 'react';
import { useHistory } from 'react-router-dom';
import Text from '../../Components/Text';
import Form from '../../Components/Form';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import Padding from '../../Components/Padding';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';

const RecorderPresenter = ({
  isStarted,
  onStart,
  onStop,
  handleSubmit,
  isReady,
  isStopped,
}) => {
  const history = useHistory();

  const moveTo = (target) => {
    history.push(`${target}`);
  };

  return (
    <>
      <Form style={{ alignItems: 'center' }}>
        <Padding height={64} />
        <Container>
          <StyledButton onClick={onStart} style={{ marginRight: '10px' }}>
            녹음 시작
          </StyledButton>
          <StyledButton onClick={onStop}>녹음 종료</StyledButton>
        </Container>
        <LinearProgress />
        <Form
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '300px',
            width: '80%',
            padding: '0px',
            margin: '0px',
          }}
        >
          <Padding height={64} />
          {isStarted === 0 && !isReady && (
            <>
              <Text>분석할 목소리가 없습니다.</Text>
              <Text>목소리를 녹음해 주세요! 🤗</Text>
            </>
          )}
          {isStarted !== 0 && !isReady && !isStopped && (
            <>
              <Text>잠시만 기다려주세요. 😔</Text>
              <Box sx={{ width: '80%' }}>
                <LinearProgress />
              </Box>
            </>
          )}
          {isStarted !== 0 && isReady && (
            <>
              <Text>목소리를 분석 중입니다.</Text>
              <Text>조용한 공간에서 해주세요! 😎</Text>
              <Text fontSize={64}>🎤</Text>
            </>
          )}
          {isStarted !== 0 && !isReady && isStopped && (
            <>
              <Text>녹음이 완료됐습니다.</Text>
              <Text>당신에게 맞는 노래는? 🤩</Text>
            </>
          )}
          <Padding height={64} />
        </Form>

        <StyledButton onClick={handleSubmit} style={{ width: '65%' }}>
          녹음한 파일보내기
        </StyledButton>
      </Form>
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
        </BottomNavigation>
      </Paper>
    </>
  );
};

const StyledButton = styled.button`
  color: ${palette.white};
  background-color: ${palette.clude};
  border: none;
  width: 170px;
  height: 70px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${palette.gray[200]};

      &:hover {
        font-weight: 500;
      }
    `};
`;

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
`;

export default RecorderPresenter;
