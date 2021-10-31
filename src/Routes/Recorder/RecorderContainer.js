import React, { useEffect, useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';

import * as tf from '@tensorflow/tfjs';
import { useHistory } from 'react-router-dom';
import { max } from '@tensorflow/tfjs';

const RecorderContainer = () => {
  const [isStarted, setIsStarted] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [myPitch, setMyPitch] = useState(-1);
  const history = useHistory();
  const mounted = useRef(false);
  const maxPitch = useRef(-1);
  const stopping = useRef(0);

  // 마이크 종료를 위한 부분.
  useEffect(() => {
    return () => {
      window.location.reload();
      stopping.current += 5;
    };
  }, []);

  // 실제 max_pitch와 pitch가 일치하는지 맞추는 부분.
  useEffect(() => {
    if (isStopping) {
      setMyPitch(maxPitch.current);
      setIsComplete(true);
      setIsRecording(false);
    }
  }, [isStopping]);

  // start가 증가할 때 마다 녹음이 시작된다. bool타입으로 구현이 힘들어서 int로 함.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      const script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.2.9/dist/tf.min.js';
      script.async = true;

      document.body.appendChild(script);
      const NUM_INPUT_SAMPLES = 1024;
      const MODEL_SAMPLE_RATE = 16000;
      const PT_OFFSET = 25.58;
      const PT_SLOPE = 63.07;
      const CONF_THRESHOLD = 0.9;
      const MODEL_URL = 'https://tfhub.dev/google/tfjs-model/spice/2/default/1';
      let model;

      async function startRecoding() {
        console.log('음표추출 시작');
        maxPitch.current = -1;
        model = await tf.loadGraphModel(MODEL_URL, { fromTFHub: true });
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then(handleSuccess)
          .catch(handleError);
      }

      function handleError(err) {
        console.log(err);
      }

      function getPitchHz(modelPitch) {
        const fmin = 10.0;
        const bins_per_octave = 12.0;
        const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
        return fmin * Math.pow(2.0, (1.0 * cqt_bin) / bins_per_octave);
      }

      function handleSuccess(stream) {
        let context = new AudioContext({
          latencyHint: 'playback',
          sampleRate: MODEL_SAMPLE_RATE,
        });

        let source = context.createMediaStreamSource(stream);
        let processor = context.createScriptProcessor(NUM_INPUT_SAMPLES, 1, 1);

        processor.channelInterpretation = 'speakers';
        processor.channelCount = 1;
        source.connect(processor);
        processor.connect(context.destination);

        processor.onaudioprocess = function (e) {
          // 종료하는 시점.
          if (0 < stopping.current) {
            console.log('onaudioprocess 종료시작');
            for (let i = 0; i < 1024; i++) {
              if (
                source.connect(processor) &&
                processor.connect(context.destination)
              ) {
                source.disconnect(processor);
                processor.disconnect(context.destination);
              }
            }
            console.log('onaudioprocess 종료 끝');
            console.log('onaudioprocess의 마지막 값', maxPitch.current);
            setIsReady(false);
            stopping.current = 0;
            return;
          }

          const inputData = e.inputBuffer.getChannelData(0);
          const input = tf.reshape(tf.tensor(inputData), [NUM_INPUT_SAMPLES]);
          let output = model.execute({ input_audio_samples: input });
          const uncertainties = output[0].dataSync();
          const pitches = output[1].dataSync();

          for (let i = 0; i < pitches.length; ++i) {
            let confidence = 1.0 - uncertainties[i];
            if (confidence < CONF_THRESHOLD) {
              continue;
            }
            let pitch = getPitchHz(pitches[i]);
            console.log(pitch);

            // 음표분석이 시작되는 시점에 준비 끝.
            if (pitch > maxPitch.current) {
              setIsReady(true);
              setIsStopped(false);
              maxPitch.current = pitch;
              console.log(maxPitch.current);
            }
          }
        };
      }
      startRecoding();
    }
  }, [isStarted]);

  const onStart = () => {
    setIsStarted(isStarted + 1);
    setIsStopped(false);
    setIsStopping(false);
    setIsComplete(false);
    setIsRecording(true);
    stopping.current = 0;
  };

  const onStop = () => {
    stopping.current += 5;
    setIsStopping(true);
    console.log('종료 cnt', stopping.current);
    console.log('맥스', maxPitch.current);

    setIsStopped(true);
    setMyPitch(maxPitch.current);
  };

  const handleSubmit = async (e) => {
    console.log('내 음표', myPitch);
    if (myPitch === -1) {
      alert('아직 층분히 녹음되지 않았습니다. 다시 녹음해주세요!');
      return;
    }

    if (myPitch !== maxPitch.current) setMyPitch(maxPitch.current);

    localStorage.setItem('pitch', myPitch);
    alert(`음표 추출에 성공했습니다!${myPitch}`);
    history.push('/displayResult');
  };

  return (
    <div>
      <RecorderPresenter
        {...{ onStart }}
        {...{ onStop }}
        {...{ handleSubmit }}
        {...{ isStarted }}
        {...{ isReady }}
        {...{ isStopped }}
        {...{ isStopping }}
        {...{ isComplete }}
        {...{ isRecording }}
      />
    </div>
  );
};

export default RecorderContainer;
