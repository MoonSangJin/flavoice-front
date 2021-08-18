import React, { useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';
import { useReactMediaRecorder } from 'react-media-recorder';

import axios from 'axios';

const RecorderContainer = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [audioUrls, setAudioUrls] = useState([{ id: '', fileUrl: '' }]);

  const showType = async () => {
    console.log(mediaBlobUrl);
    var blob = await fetch(mediaBlobUrl).then((record) => record.blob());
    console.log(blob);
    console.log(audioUrls);
    alert('디비로 파일 보내기');
  };

  const testPost = (blob) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
        audio: audioUrls,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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
        const audio = {
          id: nextId.current,
          fileUrl: fileUrls[i],
        };
        setAudioUrls(audioUrls.concat(audio));
        nextId.current += 1;
        console.log(audioUrls, i);
      };
      reader.readAsDataURL(file);
    }
  };

  const onRemove = (id) => {
    console.log('onRemove', audioUrls, id);
    setAudioUrls(audioUrls.filter((audio) => audio.id !== id));
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
        {...{ testPost }}
      />
    </div>
  );
};

export default RecorderContainer;
