import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Recorder } from 'react-voice-recorder';
import 'react-voice-recorder/dist/index.css';

export default function Recording() {
  useEffect(() => {
    handleReset();
  }, []);

  const [audioDetails, setAudioDetails] = useState({
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    },
  });

  const handleAudioStop = (data) => {
    console.log(data);
    setAudioDetails({ audioDetails: data });
  };
  const handleAudioUpload = (file) => {
    console.log('handleAudioUpload 눌렸을때');
    console.log(file);
  };
  const handleReset = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setAudioDetails(reset);
  };

  return (
    <div>
      <Recorder
        record={true}
        title={'New recording'}
        showUIAudio
        audioURL={audioDetails.url}
        {...{ handleAudioStop, handleAudioUpload, handleReset }}
      />
    </div>
  );
}
