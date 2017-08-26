import React, {Component} from 'react';
import {View, Text} from 'react-native';


// class component (for handling dynamic content suck as ajax request)
// lifecyle methods available 
class AlbumList extends Component {
	componentWillMount(){
		console.log('component will mount in AlbumList');
		//debugger;
	}

	render(){ // for class component, render
		return (
			<View>
				<Text>Album List!!!</Text>
			</View>
		);
	}
};

export default AlbumList;