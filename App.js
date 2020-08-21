import * as React from 'react';
import { Text, View,  } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import PlaylistScreen from './screens/Playlist';
import CommunityScreen from './screens/Community';
import SettingsScreen from './screens/Settings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} 
          options={{drawerIcon:({size}) => (<Ionicons name="home-outline" size={size}/>)}}/>
        <Drawer.Screen name="Playlist" component={PlaylistScreen} 
          options={{drawerIcon:({size}) => (<Ionicons name="list" size={size}/>)}}/>
        <Drawer.Screen name="Community" component={CommunityScreen} 
          options={{drawerIcon:({size}) => (<Ionicons name="musical-notes-outline" size={size}/>)}}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} 
          options={{drawerIcon:({size}) => (<Ionicons name="settings-outline" size={size}/>)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}