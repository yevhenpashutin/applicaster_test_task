import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { getAllData } from '../../utils/api';
import LinkItem from '../../components/StartScreen/LinkItem';
import VideoItem from '../../components/StartScreen/VideoItem';
import styles from './styles';

const StartScreen = (props) => {
  const [listData, setListData] = useState(null); 
  const [filterVal, setFilterVal] = useState(null); 
  const [filteredData, setFilteredData] = useState(null); 
    
  useEffect(() => {
    async function getData() {
      const data = await getAllData();
      setListData(data);
      setFilteredData(data);
    }
    getData();
  }, []);

  const applyNewFilterVal = (text) => {
    setFilterVal(text);
    let filteredArray = listData.filter((el) => el.title.includes(text));
    setFilteredData(filteredArray);
  }

  function Item({item}) {
    switch (item.type.value) {
        case 'link': 
            return (
                <LinkItem onPress={() => props.navigation.navigate('ShowLink', {item})}
                item={item} />
            );
        case 'video': 
            return (
                <VideoItem onPress={() => props.navigation.navigate('VideoScreen', {item})}
                item={item} />
            );  
        default: 
            return <View/>  
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WEB PAGES AND VIDEOS</Text>
      <TextInput
            value={filterVal}
            onChangeText={applyNewFilterVal}
            style={styles.textInputStyle}
            placeholder={'type title of the item'}
            autoCorrect={false}
      />
      {filteredData && <FlatList
            data={filteredData}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            style={styles.list}
      />}
    </View>
  );
}

export default StartScreen;