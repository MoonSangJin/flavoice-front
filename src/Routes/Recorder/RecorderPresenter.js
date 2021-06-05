import React from 'react';
import { Link } from 'react-router-dom';
import { useReactMediaRecorder } from 'react-media-recorder';
import BackButton from '../../Components/BackButton';

const RecorderPresenter = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <div>
      <Link to="/">
        <BackButton />
      </Link>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default RecorderPresenter;
