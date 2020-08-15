/**
 * FXProcessor UI App
 * https://github.com/jdicarlantonio/FXProcessor
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, ScrollView } from 'react-native';

import EqualizerUI from './components/EqualizerUI';

class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <EqualizerUI />
      </ScrollView>
    );    
  }
}

export default App;
