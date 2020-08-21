import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
    </View>
  );
}

function PlaylistScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PlaylistScreen</Text>
    </View>
  );
}

function CommunityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CommunityScreen</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>SettingsScreen</Text>
    </View>
  );
}

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