import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class component (for handling dynamic content suck as ajax request)
// lifecyle methods available 
class AlbumList extends Component {
	state = { albums: [] };

	// rules of state
	// state: a plain javascript object used to record and respond to user-triggered events
	// when we need to update a component shows, call 'this.setState', not 'this.state'
	componentWillMount() {
	axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
		//console.log('component will mount in AlbumList');
		//debugger;
	}

	renderAlbums() {
		var returnVal = this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
		);

		console.log(returnVal);
		return returnVal;
	}

	render(){ // for class component, render
		//console.log(this.state);


		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;
