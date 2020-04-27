import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ShowItemScreen = (props) => {
  const { link } = props.route.params.item;

    return (
      <View style={styles.container}>
        <WebView source={{ uri: link.href }} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

export default ShowItemScreen;