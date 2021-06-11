import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import Form from '../../Components/Form';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';

const ImBlock = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;

const CloseBox = styled(Button)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  background: ${palette.black};
`;

const CameraBlock = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 250px;
  padding: 15px 11px 7px 12px;
  border-radius: 8px;
  border: solid 1px ${palette.gray[100]};
  background-color: ${palette.gray[50]};
  letter-spacing: -0.7px;
  color: #808080;

  cursor: pointer;
`;

const RecorderPresenter = ({
  onShowType,
  status,
  startRecording,
  stopRecording,
  mediaBlobUrl,
  onInsert,
  onRemove,
  imgUrls,
}) => {
  return (
    <Form>
      <Link to="/">
        <BackButton />
      </Link>
      <Text>{status}</Text>
      <Button onClick={onShowType} hover>
        <Text hover>type확인버튼</Text>
      </Button>
      <Button onClick={startRecording}>
        <Text hover>녹화시작</Text>{' '}
      </Button>
      <Button onClick={stopRecording}>
        <Text hover>녹화종료</Text>
      </Button>
      <audio src={mediaBlobUrl} controls />

      <CameraBlock>
        <Text fontWeight={400}>녹음파일추가</Text>
        <input
          style={{ display: 'none' }}
          type="file"
          multiple
          accept="audio/*"
          onChange={onInsert}
        />
      </CameraBlock>
      {imgUrls.map((imgUrl, i) => (
        <div key={i + 1}>
          {i === 0 ? null : (
            <ImBlock>
              <StyledImg src={imgUrl.fileUrl} />
              <CloseBox onClick={() => onRemove(imgUrl.id)}></CloseBox>
            </ImBlock>
          )}
        </div>
      ))}
    </Form>
  );
};

export default RecorderPresenter;
