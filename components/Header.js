
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style= {styles.header} > 
        <Text style= {styles.text}>TriApp</Text>
    </View>
    
  ); 
  } 

 const styles = StyleSheet.create({
    header: {
      backgroundColor: 'orange',
      height: 60,
      padding: 10,
      width: '100%',
      marginBottom: 10,
    },
    text: {
      fontSize: 25,
      color: '#fff',
      textAlign:'center',
    },
  
  });  