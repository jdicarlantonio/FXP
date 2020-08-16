/**
 * FXProcessor UI App
 * https://github.com/jdicarlantonio/FXProcessor
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Effects from './components/Effects';
import Bluetooth from './components/Bluetooth';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return(
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Effects" component={Effects} />
      <Drawer.Screen name="Bluetooth" component={Bluetooth} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

class App extends React.Component {
  render() {
    return (
      <MainStack />
    );    
  }
}

export default App;
