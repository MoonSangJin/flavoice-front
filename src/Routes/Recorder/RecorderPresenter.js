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

const RecorderPresenter = ({
  showType,
  status,
  startRecording,
  stopRecording,
  mediaBlobUrl,
  onInsert,
  onRemove,
  audioUrls,
  testPost,
}) => {
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
        ) : (
          <Text style={{ visibility: 'hidden' }}>녹음 </Text>
        )}
        <Padding height={32} />
        <Container>
          <StyledButton
            onClick={startRecording}
            style={{ marginRight: '10px' }}
            active={status === 'recording'}
          >
            녹음 시작
          </StyledButton>
          <StyledButton onClick={stopRecording} active={status === 'stopped'}>
            녹음 종료
          </StyledButton>
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
        <StyledButton onClick={showType} style={{ width: '65%' }}>
          녹음한 파일보내기
        </StyledButton>
      </Form>
      <button onClick={testPost}>API</button>
      <Form>
        <Line />
        <Padding height={32} />
        <Text>파일 업로드</Text>
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
              <ImBlock
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <audio
                  controls
                  style={{ marginBottom: '10px', marginTop: '20px' }}
                >
                  <source src={audioUrl.fileUrl} type="audio/wav" />
                </audio>
                <div>
                  <StyledButton style={{ marginRight: '10px' }}>
                    목소리 선택
                  </StyledButton>
                  <StyledButton onClick={() => onRemove(audioUrl.id)}>
                    삭제
                  </StyledButton>
                </div>
              </ImBlock>
            )}
          </div>
        ))}
      </Form>
    </>
  );
};

export default RecorderPresenter;
