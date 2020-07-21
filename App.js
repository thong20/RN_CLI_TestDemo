
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import {
  Player,
  Recorder,
  MediaStates
} from '@react-native-community/audio-toolkit';

const App: () => React$Node = () => {

  const [stateDisable, setStateDisable] = useState(false)

  const _onPress = () => {
    new Player("rasputin.mp3").play();
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
       <Text style={styles.header}>React-native-media-toolkit</Text>
        <Button
          title="Play Music"
          disabled={stateDisable}
          onPress={() => _onPress()
        }/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 26,
    color: 'coral',
    fontWeight: 'bold'
  }
});

export default App;
