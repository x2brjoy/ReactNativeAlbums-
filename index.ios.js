// import library
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// create a component
const App = () => {
  return (
    <Text>Some text</Text>
  );
};

// render it to device
AppRegistry.registerComponent('albums', () => App);