import React from 'react';
import { Link } from 'react-router-dom';
import { useReactMediaRecorder } from 'react-media-recorder';
import BackButton from '../../Components/BackButton';

const RecorderPresenter = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const showType = async () => {
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then((r) => r.blob());
    console.log(blob);
  };

  return (
    <div>
      <Link to="/">
        <BackButton />
      </Link>
      <p>{status}</p>
      <button onClick={showType}>type확인버튼</button>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl} />
    </div>
  );
};

export default RecorderPresenter;
