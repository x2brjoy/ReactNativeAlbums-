// import library
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => (
	<Header headerText={'Albums'}></Header>
);

// render it to device
AppRegistry.registerComponent('albums', () => App);