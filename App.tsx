import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/Tab1';
import {Tabs} from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
