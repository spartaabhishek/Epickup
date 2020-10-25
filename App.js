import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions,Button, Keyboard, Modal } from 'react-native';
import MapComponent from './components/map'
import Signup from './components/signup'
import Login from './components/login'

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        loggedIn: false,
    }
    
  }
 
  login(){
    this.setState({
      loggedIn: true
    })
  }
  
  

  updateText(t){
    this.setState({
      text:t
    })
  }
  
  render() {
    return (
     <View style={styles.container}>
       {this.state.loggedIn?<MapComponent />:<Login login={()=>this.login()} />}
      </View>
    );
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});