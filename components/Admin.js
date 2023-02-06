    
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';


export default function Admin({navigation}) {
  return (
    <KeyboardAvoidingWrapper>
        
    <View style={styles.container}>
    <Image source={require('./../assets/baj.jpg')} style={{marginTop:40,marginBottom:20, alignSelf:'center', width:'100%', height:200, }}  />
         <TouchableOpacity style={styles.but} onPress={()=> {navigation.navigate('Register')}}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Register Tricycle</Text>
         </TouchableOpacity>
    
         <TouchableOpacity style={styles.but} onPress={()=> {navigation.navigate('Update')}}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Tax Payment</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.but} onPress={()=> {navigation.navigate('Record')}}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Tricycle Record</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.but} onPress={()=> {navigation.navigate('Staff')}}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Register Staff</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.but} onPress={()=> {navigation.navigate('Users')}}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Staff Record</Text>
         </TouchableOpacity>
    </View>
    </KeyboardAvoidingWrapper>
  ); 
  } 

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop:30,
      alignContent:'center',
    },

    
    but: {
      height:50,
      borderRadius:5,
      borderWidth:1,
      width:'90%',
      alignContent:'center',
      alignItems: 'center',
      margin:10,
      marginLeft:15,
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
  
 