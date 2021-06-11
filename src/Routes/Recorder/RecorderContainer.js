import React, { useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';
import { useReactMediaRecorder } from 'react-media-recorder';

const RecorderContainer = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const showType = async () => {
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then((r) => r.blob());
    console.log(blob);
  };

  const [imgUrls, setImgUrls] = useState([{ id: '', fileUrl: '' }]);
  const MAX = 3;

  const nextId = useRef(1);
  const onInsert = (e) => {
    if (imgUrls.length > MAX) {
      alert('사진은 3개 까지만 업로드 가능합니다.');
      return;
    }

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

        setImgUrls(imgUrls.concat(image));
        nextId.current += 1;
      };
      reader.readAsDataURL(file);
    }
  };

  const onRemove = (id) => {
    console.log('onRemove', imgUrls, id);
    setImgUrls(imgUrls.filter((img) => img.id !== id));
  };

  return (
    <div>
      <RecorderPresenter
        {...{ status }}
        {...{ showType }}
        {...{ imgUrls }}
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
