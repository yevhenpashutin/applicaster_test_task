import React from 'react';
import { View, Text, StyleSheet, Image,  TouchableOpacity } from 'react-native';

const VideoItem = (props) => {
    const { title, media_group, summary } = props.item;
    const imageUrl = media_group[0].media_item ? media_group[0].media_item[0].src : null;

    return (
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View style={styles.leftContainer}>
            {imageUrl 
              ? <Image
                    source={{uri: imageUrl}}
                    style={styles.mediaImage}
                /> 
              : <Text>No image</Text>}
              
              <TouchableOpacity 
                onPress={props.onPress}
                style={styles.playButton}>
                <Text style={styles.playText}>PLAY</Text>
              </TouchableOpacity>
              
            </View>
            
            <View style={{width: '75%'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.summary}>{summary}</Text>
            </View>

      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: '#A25BA4',
      borderWidth: 3,
      borderRadius: 10,
      marginVertical: 3,
      padding: 5
  },
  leftContainer: {
      width: '24%', 
      height: '100%',
      resizeMode: 'contain',
      marginRight: '1%'
  },
  playButton: {
      backgroundColor: '#A25BA4',
      borderRadius: 10,
      marginTop: 5
  },
  playText: {
      textAlign: 'center',
      color: 'white'
  },
  mediaImage: {
      width: '100%', 
      height: 40,
      resizeMode: 'contain',
  },
  title: {
      fontSize: 12, 
      color: '#A45AA6'
  },
  summary: {
      fontSize: 8, 
      color: '#232323'
  }
  });
  
export default VideoItem;