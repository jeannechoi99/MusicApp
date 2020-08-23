import React, { Component } from 'react';
import { Header } from 'react-native-elements'; 

export default class HeaderTitleExample extends Component {
  render() {
    return (
      <Header
        centerComponent={{ text: '앱이름', style: { color: '#fff' }}}
        containerStyle={{backgroundColor: '#c5a8ff'}}
      />
    );
  }
}