import { useReactMediaRecorder } from 'react-media-recorder';
import Home from './Routes/Home';
const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const showType = async () => {
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then((r) => r.blob());
    console.log(blob);
  };

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <button onClick={showType}>audio 확인하기</button>
      <audio src={mediaBlobUrl} controls autoPlay loop />
      <Home />
    </div>
  );
};

export default RecordView;
