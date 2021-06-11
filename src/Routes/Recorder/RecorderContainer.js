import React, { useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';
import { useReactMediaRecorder } from 'react-media-recorder';

const RecorderContainer = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [audioUrls, setAudioUrls] = useState([{ id: '', fileUrl: '' }]);

  const showType = async () => {
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then((record) => record.blob());
    console.log(blob);
    console.log(audioUrls);
  };

  const nextId = useRef(1);
  const onInsert = (e) => {
    const fileArr = e.target.files;

    let fileUrls = [];

    let file;
    let filesLength = fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileUrls[i] = reader.result;
        const image = {
          id: nextId.current,
          fileUrl: fileUrls[i],
        };

        console.log('for in image i nextId.current ', image, i, nextId.current);

        setAudioUrls(audioUrls.concat(image));
        nextId.current += 1;
      };
      reader.readAsDataURL(file);
    }
  };

  const onRemove = (id) => {
    console.log('onRemove', audioUrls, id);
    setAudioUrls(audioUrls.filter((img) => img.id !== id));
  };

  return (
    <div>
      <RecorderPresenter
        {...{ status }}
        {...{ showType }}
        {...{ audioUrls }}
        {...{ mediaBlobUrl }}
        {...{ startRecording }}
        {...{ stopRecording }}
        {...{ onInsert }}
        {...{ onRemove }}
      />
    </div>
  );
};

export default RecorderContainer;
