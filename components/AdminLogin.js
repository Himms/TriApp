    
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
import * as SQLite from 'expo-sqlite';



const db = SQLite.openDatabase("db.db");


export default function AdminLogin({navigation}) {

    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [usernamedb, setUsernamedb ] = useState('');
    const [passworddb, setPassworddb ] = useState('');

     const createTables = () => {
        db.transaction(txn => {
          txn.executeSql(
            `CREATE TABLE IF NOT EXISTS admin (id INTEGER PRIMARY KEY AUTOINCREMENT,  username VARCHAR(100), password VARCHAR(100))`,
            [],
            (sqlTxn, res) => {
              console.log("Admin table created successfully");
            },
            error => {
              console.log("error on creating table " + error.message);
            },
          );
        });
      };

     const addAdmin = () => {
        db.transaction(txn => {
            txn.executeSql(
              `INSERT INTO admin (username, password) VALUES ('admin','nda')`,
              [],
              (sqlTxn, res) => {
                console.log(' username and password added successfully');
              },
              error => {
                console.log("error on adding Admin " + error.message);
              },
            );
          });
        };
        

  const getAdmin = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM admin`,
        [],
        (sqlTxn, res) => {
          console.log("Admin retrieved successfully");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
             
              let usernamedb = res.rows.item(i).username;
              let passworddb = res.rows.item(i).password;

              setUsernamedb(usernamedb);
              setPassworddb(passworddb);
               
              if(usernamedb == username && passworddb == password){
                navigation.navigate('Admin');
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

        useEffect(() => {
             createTables();
             addAdmin();
         }, []);
    

  return (
    <KeyboardAvoidingWrapper>
        
    <View style={styles.container}>
    <Image source={require('./../assets/baj.jpg')} style={{marginTop:40,marginBottom:20, alignSelf:'center', width:'100%', height:200, }}  />
        <Text style={styles.texty} >Admin Login</Text>
         <TextInput value={username} onChangeText={setUsername}  placeholder='Enter Username' style={styles.input}/>
         <TextInput value={password} onChangeText={setPassword}  placeholder='Enter Password' style={styles.input} secureTextEntry={true} />
         <TouchableOpacity style={styles.but} onPress={getAdmin}>
             <Text style={{textAlign:'center', padding:10, color:'white', fontSize:20, }} >Login</Text>
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
  
 