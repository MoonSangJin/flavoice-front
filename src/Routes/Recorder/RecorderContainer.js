import React, { useEffect, useRef, useState } from 'react';
import RecorderPresenter from './RecorderPresenter';
import { useReactMediaRecorder } from 'react-media-recorder';
import * as tf from '@tensorflow/tfjs';
import axios from 'axios';

const RecorderContainer = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const [audioUrls, setAudioUrls] = useState([{ id: '', fileUrl: '' }]);
  const [toggle, setToggle] = useState(false);

  const showType = async () => {
    console.log(mediaBlobUrl);
    var blob = await fetch(mediaBlobUrl).then((record) => record.blob());
    console.log('라이브러리에서 얻은 blob', blob);
    console.log('오디오Urls', audioUrls);

    const url = URL.createObjectURL(blob);
    console.log(url);
    console.log(status);
  };

  const testPost = async (blob) => {
    let fd = new FormData();
    fd.append('fname', 'test.wav');
    fd.append('data', blob);
    console.log('포스트 중 블랍', blob);
    try {
      const response = await axios.post('https://flavoice.shop/api/v1/files', {
        id: '1',
        filename: '테스트중',
        user: 1,
      });
      console.log('응답', response);
    } catch (e) {
      throw e;
    }
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

  const mounted = useRef(false);
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
      let maxPitch = -1;
      let model;

      async function startDemo() {
        model = await tf.loadGraphModel(MODEL_URL, { fromTFHub: true });

        //console.log("model", model);
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

            if (pitch > maxPitch) {
              maxPitch = pitch;
              console.log(maxPitch);
            }
          }
        };
      }

      startDemo();
      return () => {
        document.body.removeChild(script);
        window.location.reload();
      };
    }
  }, [toggle]);

  const onToggle = () => {
    if (!toggle) startRecording();
    else stopRecording();
    setToggle(!toggle);
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
        {...{ onToggle }}
        {...{ onInsert }}
        {...{ onRemove }}
        {...{ testPost }}
      />
    </div>
  );
};

export default RecorderContainer;
