import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './Header';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';


export default function App() {

  const [names, setNames ] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [chasis, setChasis] = useState('');
  const [nin, setNin] = useState('');
  const [expiry, setExpiry] = useState('');
  const [transaction, setTransaction] = useState('');
  const [ vmoney, setVmoney] = useState('');

  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.register} >
      <Header />
      <Text style={{color:'black'}}> REGISTER </Text>
      <View />
      
      <TextInput 
       placeholder='Enter Name'
       
       onChangeText={(names) => setNames(names)}
       style={styles.input}/>
      
      <TextInput 
       placeholder='Enter Address'
      
       onChangeText={(address) => setAddress(address)}
       style={styles.input}/>
      
      <TextInput 
       placeholder='Enter Phone Number'
      // value='{phone}'
      onChangeText={(phone) => setPhone(phone)}
      style={styles.input}/>
      
      <TextInput 
      placeholder='Enter Chasis Number'
      //value='{chasis}'
      onChangeText={(chasis) => setChasis(chasis)}
      style={styles.input}/>
    
     <TextInput 
     placeholder='Enter NIN Number'
     //value='{nin}'
     onChangeText={(nin) => setNin(nin)}
       style={styles.input}/>
    
    <TextInput 
    placeholder='Enter Vehicle licence Expiry'
    //value='{expiry}'
    onChangeText={(expiry) => setExpiry(expiry)}
    style={styles.input}/>
   <TextInput 
   placeholder='Enter Transaction ID'
   //value='{transaction}'
   onChangeText={(transaction) => setTransaction(transaction)}
   style={styles.input}/>
  <TextInput 
  placeholder='Enter Virtual Money'
  //value='{vmoney}'
  onChangeText={(vmoney) => setVmoney(vmoney)}
  style={styles.input}/>
    </View>
 </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  register: {

    alignItems: 'center',
    
  },

  inputView: {

   

    borderRadius: 30,

    width: "90%",

    height: 45,

    marginBottom: 10,

    alignItems: "center",

  },

  input: {

    backgroundColor: "lightgrey",

    borderRadius: 5,

    width: "90%",

    height: 45,

    marginBottom: 10,

    alignItems: "center",
    padding:10

  },

});
