import React from 'react';
import { View, Text, StyleSheet, Image,  TouchableOpacity } from 'react-native';

const LinkItem = (props) => {
    const { title, media_group, summary } = props.item;
    const imageUrl = media_group[0].media_item ? media_group[0].media_item[0].src : null;
    
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image
                source={{uri: imageUrl}}
                style={styles.mediaImage}
            />
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
      borderColor: '#DCA73F',
      borderWidth: 3,
      borderRadius: 10,
      marginVertical: 3,
      padding: 5
  },
  mediaImage: {
    width: '24%', 
    height: '100%',
    resizeMode: 'contain',
    marginRight: '1%'
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
  
export default LinkItem;