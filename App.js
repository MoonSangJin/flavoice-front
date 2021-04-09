import * as React from 'react';
import * as FileSystem from 'expo-file-system';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    console.log(recording);
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);

    FileSystem.getInfoAsync(uri)
      .then((result) => {
        console.log(`getInfoAsync 결과 ${JSON.stringify(result)}`);
      })
      .catch((error) => console.log(error));

    FileSystem.getContentUriAsync(uri)
      .then((result) => {
        console.log(`content uri success ${result}`);
      })
      .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <Text>Audio Testing</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
