    
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

export default function Login() {
  return (
    <KeyboardAvoidingWrapper>
    <View>
    <Image source={require('./../assets/keke.jpeg')} style={{marginTop:60,marginBottom:20, alignSelf:'center', width:200, height:200, borderRadius:200/2 }}  />

         <TextInput placeholder='Enter Username' style={styles.input}/>
         <TextInput placeholder='Enter Password' style={styles.input} secureTextEntry={true} />
            <TouchableOpacity style={styles.but}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }}>Login</Text>
         </TouchableOpacity>
    </View>
    </KeyboardAvoidingWrapper>
  ); 
  } 

  const styles = StyleSheet.create({
   
    input: {
      height:60,
      borderRadius:5,
      borderWidth:1,
      width:'90%',
      alignContent:'center',
      alignItems: 'center',
      margin:20,
      textAlign: 'center',
    },
  
    but: {
      height:60,
      borderRadius:5,
      borderWidth:1,
      width:'90%',
      alignContent:'center',
      margin:20,
      textAlign: 'center',
      backgroundColor:'orange',
    },
    txt:{textAlign:'center',
     padding:10, 
     color:'black', 
     fontSize:30, 
     fontFamily:'sans-serif-condensed',
     fontWeight: 'bold', 
     fontStyle: 'italic' }
  
  });
  
 