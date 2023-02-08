    
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
import * as SQLite from 'expo-sqlite';
import Constants from "expo-constants";
import Record from './Record';


const db = SQLite.openDatabase("db.db");


export default function Staff({navigation}) {

    const [names, setNames ] = useState('');
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
   


    const createTables = () => {
        db.transaction(txn => {
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS staff (id INTEGER PRIMARY KEY AUTOINCREMENT, names VARCHAR(100), username VARCHAR(100), password VARCHAR(100))`,
            [],
            (sqlTxn, res) => {
              console.log("table created successfully");
            },
            error => {
              console.log("error on creating table " + error.message);
            },
          );
        });
      };
      
      
      const addStaff = () => {
        if (!names || !username || !password) {
          alert("Enter all Fields");
          return false;
        }

        db.transaction(txn => {
            txn.executeSql(
              `INSERT INTO staff (names, username, password) VALUES (?,?,?)`,
              [names, username, password],
              (sqlTxn, res) => {
                console.log(`${username} username added successfully`);
                alert('Record successfully added');
              },
              error => {
                console.log("error on adding Staff " + error.message);
              },
            );
          });
        };
        
        useEffect(() => {
          createTables()
         // addStaff();           
         }, []);
         
    

  return (
    <KeyboardAvoidingWrapper>
        
    <View style={styles.container}>
    <Image source={require('./../assets/baj.jpg')} style={{marginTop:40,marginBottom:20, alignSelf:'center', width:'100%', height:200, }}  />
        <Text style={styles.texty} >Register Staff</Text>
         <TextInput value={names} onChangeText={setNames} placeholder='Enter Name' style={styles.input}/>
         <TextInput value={username} onChangeText={setUsername} placeholder='Enter Username' style={styles.input}/>
         <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password' style={styles.input}  />
         <TouchableOpacity style={styles.but} onPress={addStaff}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Submit</Text>
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

    
    txt:{textAlign:'center',
     padding:10, 
     color:'black', 
     fontSize:30, 
     fontFamily:'sans-serif-condensed',
     fontWeight: 'bold', 
     fontStyle: 'italic' }
  
  });
  
 