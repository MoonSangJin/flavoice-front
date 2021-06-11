import React from 'react';
import { Link } from 'react-router-dom';
import { useReactMediaRecorder } from 'react-media-recorder';
import BackButton from '../../Components/BackButton';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import Form from '../../Components/Form';

const RecorderPresenter = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const showType = async () => {
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then((r) => r.blob());
    console.log(blob);
  };
  return (
    <Form>
      <Link to="/">
        <BackButton />
      </Link>
      <Text>{status}</Text>
      <Button onClick={showType} hover>
        <Text hover>type확인버튼</Text>
      </Button>
      <Button onClick={startRecording}>
        <Text hover>녹화시작</Text>{' '}
      </Button>
      <Button onClick={stopRecording}>
        <Text hover>녹화종료</Text>
      </Button>
      <audio src={mediaBlobUrl} controls />
    </Form>
  );
};

export default RecorderPresenter;
