import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen';;
import WebViewScreen from './src/screens/WebViewScreen';
import VideoScreen from './src/screens/VideoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
  
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="ShowLink" component={WebViewScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}