import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoScreen = (props) => {
  const { content } = props.route.params.item;

    return (
      <View style={styles.container}>
        <Video 
          source={{uri: content.src}}   
          resizeMode={'contain'}
          style={styles.backgroundVideo} 
          />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#22D0CB'
  },
  backgroundVideo: {
    flex: 1
  },
});  

export default VideoScreen;