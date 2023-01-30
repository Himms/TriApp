import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';
import Register from './components/Register';
import Footer from './components/Footer';
import Login from './components/Login';


export default function App() {

 
  return (
    
    <View style={styles.container} >
     <StatusBar style="auto" />
     <Text style={{color:'orange', fontWeight:'bold', fontSize:30, marginTop:50, textAlign:'center'}}>TriApp </Text>
        <Login />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingTop:30,
    
    alignContent:'center',
  },

  
});
