import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Text from '../../Components/Text';
import Form from '../../Components/Form';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import Line from '../../Components/Line';
import Padding from '../../Components/Padding';
import Upload from '../../../src/cloud.png';

const ImBlock = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 200px;
  height: 150px;
`;

const AudioBlock = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
`;

const StyledButton = styled.button`
  color: ${palette.white};
  background-color: ${palette.clude};
  border: none;
  width: 120px;
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

const RecorderPresenter = ({
  showType,
  status,
  startRecording,
  stopRecording,
  mediaBlobUrl,
  onInsert,
  onRemove,
  audioUrls,
}) => {
  return (
    <>
      <Link to="/">
        <BackButton />
      </Link>
      <Form style={{ alignItems: 'center' }}>
        <Padding height={32} />
        <StyledButton onClick={showType}>녹화한 파일보내기</StyledButton>
        <Padding height={32} />
        <Text>
          {status === 'recording' ? (
            '녹화 중'
          ) : status === 'stopped' ? (
            '녹화 끝'
          ) : (
            <Text style={{ visibility: 'hidden' }}>녹화 </Text>
          )}
        </Text>
        <Padding height={32} />
        <Container>
          <StyledButton
            onClick={startRecording}
            style={{ marginRight: '10px' }}
            active={status === 'recording'}
          >
            녹화 시작
          </StyledButton>
          <StyledButton onClick={stopRecording} active={status === 'stopped'}>
            녹화 종료
          </StyledButton>
        </Container>
        <Padding />
        {status === 'stopped' ? (
          <audio src={mediaBlobUrl} controls />
        ) : (
          <audio style={{ visibility: 'hidden' }} controls />
        )}
      </Form>

      <Form>
        <Line />
        <Padding height={32} />
        <AudioBlock>
          <Img src={Upload} alt={'logo'} />
          <input
            style={{ display: 'none' }}
            type="file"
            multiple
            accept="audio/*"
            onChange={onInsert}
          />
        </AudioBlock>
        <Padding />
        {audioUrls.map((audioUrl, i) => (
          <div key={i + 1}>
            {i === 0 ? null : (
              <ImBlock>
                <audio controls>
                  <source src={audioUrl.fileUrl} type="audio/wav" />
                </audio>
                <StyledButton onClick={() => onRemove(audioUrl.id)}>
                  삭제
                </StyledButton>
                <StyledButton>이 목소리 선택하기</StyledButton>
              </ImBlock>
            )}
          </div>
        ))}
      </Form>
    </>
  );
};

export default RecorderPresenter;
