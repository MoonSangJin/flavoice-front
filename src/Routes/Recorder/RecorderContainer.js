import React, { useEffect, useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';
import { useReactMediaRecorder } from 'react-media-recorder';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

const RecorderContainer = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [start, setStart] = useState(false);

  // useEffect(() => {
  //   console.log('상태', status);
  // }, [status]);

  const testPost = async () => {
    console.log('테스트 post');
  };

  const mounted = useRef(false);
  const maxPitch = useRef(-1);
  const flag = useRef(true);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (!start) {
        return;
      }
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

      async function startDemo() {
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
        var context = new AudioContext({
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
          if (flag.current) {
            console.log('종료');
            flag.current = !flag.current;
            source.disconnect(processor);
            processor.disconnect(context.destination);
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
            if (pitch > maxPitch.current) {
              maxPitch.current = pitch;
              console.log(maxPitch.current);
            }
          }
        };
      }

      startDemo();
    }
  }, [start]);

  console.log('현재', maxPitch);
  const onToggle = () => {
    flag.current = !flag.current;
    console.log(flag.current);
    setStart(!start);
  };

  return (
    <div>
      <button
        onClick={() => {
          onToggle();
        }}
      >
        토글버튼
      </button>

      <RecorderPresenter
        {...{ status }}
        {...{ mediaBlobUrl }}
        {...{ startRecording }}
        {...{ stopRecording }}
        {...{ testPost }}
      />
    </div>
  );
};

export default RecorderContainer;
