
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants'

const StatusBarHeight = Constants.StatusBarHeight;
export default function Welcome({navigation}) {
  return (
    <View style= {styles.header} >
      
     <Image source={require('./../assets/baj.jpg')} style={{marginTop:40,marginBottom:20, alignSelf:'center', width:'100%', height:250, }}  />
        <Text style= {styles.text} > Welcome! </Text>
        <TouchableOpacity style={styles.but}>
                    <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }}>Click to Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.but}>
                    <Text style={{textAlign:'center',padding:10,  color:'white', fontSize:20,  }} onPress={()=> {navigation.navigate('Login')}}>Logout</Text>
        </TouchableOpacity>
    </View>

  );
  }

 const styles = StyleSheet.create({
   
    titled: {
      fontSize: 25,
      color: 'white',
      textAlign:'center',
    },
    text: {
          fontSize: 25,
          color: 'black',
          textAlign:'center',
          paddingTop:20,
        },
    mini: {
          fontSize: 20,
          color: 'black',
          textAlign:'center',
          paddingBottom:20,
                        },
            
    but: {
          height:50,
          borderRadius:5,
          borderWidth:1,
          width:'90%',
          alignContent:'center',
          marginTop:30,
          marginLeft:20,
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor:'orange',
          
        },

  });