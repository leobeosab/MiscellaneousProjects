import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album: { thumbnail_image, title, artist, image, url } }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>
      <View stlye={styles.titleTextContainer}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.albumArtStyle} source={{ uri: image }} />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(url)}> Buy Now! </Button>
    </CardSection>
  </Card>
);

const styles = {
  titleTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 45,
    width: 45
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumArtStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
