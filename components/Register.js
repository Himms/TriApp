import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import Header from './Header';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("db.db");

export default function Register() {

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());
	
 function showDatePicker() {
    setDatePicker(true);
  };
	
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }; 
  
  const [rno, setRno ] = useState('');
  const [names, setNames ] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [chasis, setChasis] = useState('');
  const [nin, setNin] = useState('');
 

 /* const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS register (id INTEGER PRIMARY KEY AUTOINCREMENT, rno VARCHAR(200) NOT NULL UNIQUE, names VARCHAR(200), address VARCHAR(200), phone VARCHAR(200), chasis VARCHAR(200), nin VARCHAR(200), date VARCHAR(200))`,
        [],
        (sqlTxn, res) => {
          console.log(" Register table created successfully");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };
  */

 const  ddate = date.toDateString();
 //alert(ddate);

  const addRegister = () => {
    db.transaction(txn => {
        txn.executeSql(
          `INSERT INTO register (rno, names, address, phone, chasis, nin, date) VALUES (?,?,?,?,?,?,?)`,
          [rno, names, address, phone, chasis, nin, ddate],
          (sqlTxn, res) => {
            console.log(`rno ${rno} and date ${ddate} added successfully`);
            alert('Record added successfully');
          },
          error => {
            alert('Record already exist');
            console.log("error on adding Admin " + error.message);
          },
        );
      });
    };

/*
const getRegister = () => {
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
     //    createTables();
       //  addRegister();
     }, []);
*/


  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container} >
      <Header />
      <Text style={{color:'black', fontSize:20, marginBottom:10,}}> Register Tricycle</Text>
      <View />
      
      <TextInput 
      autoCapitalize='characters'
      value={rno.toUpperCase()} onChangeText={setRno}
       placeholder='Enter Registration Number'
       style={styles.input}/>

      <TextInput 
       autoCapitalize='characters'
      value={names.toUpperCase()} onChangeText={setNames}
       placeholder='Enter Name'
       style={styles.input}/>
      
      <TextInput 
       placeholder='Enter Address'
       value={address} onChangeText={setAddress}
       style={styles.input}/>
      
      <TextInput 
       placeholder='Enter Phone Number'
       value={phone} onChangeText={setPhone}
      style={styles.input}/>

      <TextInput 
      autoCapitalize='characters'
      placeholder='Enter Chasis Number'
      value={chasis.toUpperCase()} onChangeText={setChasis}
       style={styles.input}/>
    
     <TextInput 
     placeholder='Enter NIN Number'
     value={nin} onChangeText={setNin}
       style={styles.input}/>
      
 <Text style={styles.text}> Date = {date.toDateString()}</Text>
{datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}

      <TouchableOpacity style={styles.but} onPress={addRegister}>
                    <Text style={{textAlign:'center',padding:10,  color:'white', fontSize:20,  }} >Submit</Text>
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
  but: {
    height:50,
    borderRadius:5,
    borderWidth:1,
    width:'90%',
    alignContent:'center',
    margin:10,
    
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor:'orange',
    
  },

  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
    color: 'grey',
  },

  text: {
    fontSize: 20,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
  },

});
