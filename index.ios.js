// import library
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// render it to device
AppRegistry.registerComponent('albums', () => App);
