import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image } = album;
	const { 
		thumbnailStyle, 
		headerTextStyle,
		headerContentStyle, 
		imageStyle,
		thumbnailContainerStyle } = styles;
	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle}
						source={{ url: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{ title }</Text>
					<Text>{ artist }</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image 
					style={imageStyle}
					source={{ url: image }} 
				/>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around' 
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10

	}
};

export default AlbumDetail;
