    
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
import * as SQLite from 'expo-sqlite';
import Constants from "expo-constants";


const db = SQLite.openDatabase("db.db");




export default function Login({navigation}) {

const [username, setUsername ] = useState('');
const [password, setPassword ] = useState('');

const [usernamedb, setUsernamedb ] = useState('');
const [passworddb, setPassworddb ] = useState('');


  const getStaff = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM staff`,
        [],
        (sqlTxn, res) => {
          console.log("Staff retrieved successfully");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
             
              let usernamedb = res.rows.item(i).username;
              let passworddb = res.rows.item(i).password;

              setUsernamedb(usernamedb);
              setPassworddb(passworddb);
               
              if(usernamedb == username && passworddb == password){
                navigation.navigate('Welcome');
              }
            }
            

          }
        },
        error => {
          console.log("error on getting Staff " + error.message);
        },
      );
    });
  };

  

  return (
    
    <KeyboardAvoidingWrapper>
    <View style={styles.container}>
    <Image source={require('./../assets/keke.jpeg')} style={{marginTop:50,marginBottom:20, alignSelf:'center', width:200, height:200, borderRadius:200/2 }}  />
        <Text style={styles.texty} >TriApp</Text>
         <TextInput value={username} onChangeText={setUsername} placeholder='Enter Username' style={styles.input}/>
         <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password' style={styles.input} secureTextEntry={true} />
         <TouchableOpacity style={styles.but} onPress={getStaff}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Login</Text>
            
         </TouchableOpacity>

         <TouchableOpacity style={styles.butty} onPress={()=> {navigation.navigate('AdminLogin')}} >
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }}>@2023</Text>
            
         </TouchableOpacity>

    </View>
    </KeyboardAvoidingWrapper>
  ); 
  } 

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#fff',
      paddingTop:30,
      alignContent:'center',
    },

    texty: {
      color:'orange',
      textAlign:'center',
      fontSize:30,
      fontWeight:'bold',
      fontStyle:'italic'
    },
   
    input: {
      height:50,
      borderRadius:5,
      borderWidth:1,
      width:'90%',
      alignContent:'center',
      alignItems: 'center',
      margin:10,
      marginLeft:15,
      textAlign: 'center',
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

    butty: {
      height:50,
      
      width:'100%',
      alignContent:'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop:100,
      backgroundColor:'lightgrey',
    },
    txt:{textAlign:'center',
     padding:10, 
     color:'black', 
     fontSize:30, 
     fontFamily:'sans-serif-condensed',
     fontWeight: 'bold', 
     fontStyle: 'italic' }
  
  });
  
 