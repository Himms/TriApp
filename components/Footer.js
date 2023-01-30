
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Footer() {
  return (
    <View style= {styles.footer} > 
        <Text style= {styles.text}>Copyright @ 2023</Text>
    </View>
    
  ); 
  } 

 const styles = StyleSheet.create({
    footer: {
      
      padding: 10,
      marginTop: 'auto',
    },
    text: {
      fontSize: 15,
      color: 'darkslateblue',
      textAlign:'center',
    },
  
  });  