import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import Form from '../../Components/Form';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';
import Line from '../../Components/Line';
import Padding from '../../Components/Padding';

const ImBlock = styled.div`
  position: relative;
`;
const CloseBox = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  background: ${palette.black};
`;

const AudioBlock = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  padding: 15px 11px 7px 12px;
  border-radius: 8px;
  border: solid 1px ${palette.gray[100]};
  background-color: ${palette.gray[50]};
  letter-spacing: -0.7px;
  color: #808080;

  cursor: pointer;
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
      <Form>
        <Link to="/">
          <BackButton />
        </Link>
        <Text>{status}</Text>
        <button onClick={showType}>
          <Text hover>type확인버튼</Text>
        </button>
        <button onClick={startRecording}>
          <Text hover>녹화시작</Text>{' '}
        </button>
        <button onClick={stopRecording}>
          <Text hover>녹화종료</Text>
        </button>
        <Padding />
        <audio src={mediaBlobUrl} controls />
      </Form>
      <Form>
        <Line />
        <Padding height={32} />
        <AudioBlock>
          <Text fontWeight={400} fontSize={16}>
            녹음파일 업로드
          </Text>
          <input
            style={{ display: 'none' }}
            type="file"
            multiple
            accept="audio/*"
            onChange={onInsert}
          />
        </AudioBlock>
        {audioUrls.map((audioUrl, i) => (
          <div key={i + 1}>
            {i === 0 ? null : (
              <ImBlock>
                <audio src={audioUrl.fileUrl} controls />
                <button onClick={() => onRemove(audioUrl.id)}>삭제</button>
              </ImBlock>
            )}
          </div>
        ))}
      </Form>
    </>
  );
};

export default RecorderPresenter;
