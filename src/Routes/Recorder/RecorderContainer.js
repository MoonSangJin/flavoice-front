import React, { useEffect, useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';
import { useReactMediaRecorder } from 'react-media-recorder';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

const RecorderContainer = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
  const [start, setStart] = useState(false);

  const mounted = useRef(false);
  const maxPitch = useRef(-1);
  const stop = useRef(true);
  const stopped = useRef(0);

  useEffect(() => {
    console.log(status);
    if (status === 'stopped') {
      stopped.current++;
    }
  }, [status]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else if (status === 'recording') {
      const check = () => {
        if (start === false) {
          console.log('useEffect 종료');
          return false;
        } else return true;
      };

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
          if (0 < stopped.current) {
            console.log('onaudioprocess 종료');
            console.log('상태', status);
            if (
              source.connect(processor) &&
              processor.connect(context.destination)
            ) {
              source.disconnect(processor);
              processor.disconnect(context.destination);
            }
            stopped.current = 0;
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
            console.log(status, stop.current);
            console.log(pitch);
            if (pitch > maxPitch.current) {
              maxPitch.current = pitch;
              console.log(maxPitch.current);
            }
          }
        };
      }

      if (check()) {
        startDemo();
      }
    }
  }, [start, status]);

  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  const onStart = () => {
    startRecording();
    setStart(true);
    stop.current = false;
    stopped.current = 0;
  };

  const onStop = () => {
    stopRecording();
    setStart(false);
    stop.current = true;
    stopped.current += 1;
    console.log('종료 cnt', stopped.current);
    console.log('맥스', maxPitch.current);
  };

  const onPitchPost = async (e) => {
    e.preventDefault();

    try {
      const accsess_token = localStorage.getItem('token');
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${accsess_token}`;

      const result = await axios.post('https://flavoice.shop/api/v1/voices/', {
        max_pitch: '10',
        min_pitch: '09',
      });

      alert('음표값 보내기');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <RecorderPresenter
        {...{ status }}
        {...{ mediaBlobUrl }}
        {...{ onStart }}
        {...{ onStop }}
        {...{ onPitchPost }}
      />
    </div>
  );
};

export default RecorderContainer;
