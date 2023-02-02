import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Header from './Header';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase("db.db");

export default function Update() {

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());
	
 function showDatePicker() {
    setDatePicker(true);
  };
	
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  
  const [namesdb, setNames ] = useState('');
  const [addressdb, setAddress] = useState('');
  const [phonedb, setPhone] = useState('');
  const [chasisdb, setChasis] = useState('');
  const [nindb, setNin] = useState('');
  const [transaction, setTransaction] = useState('');
  const [ wAmount, setWamount] = useState('');
  const [ nAmount, setNamount] = useState('');
  let [rno, setRno ] = useState('');
  const getRegister = () => {

    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM register`,
        [],
        (sqlTxn, res) => {
         // alert(rno);
          console.log("Register retrieved successfully");
          let len = res.rows.length;
    
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let rnodb = res.rows.item(i).rno;
             // alert(rnodb)
              //  alert(rno);
                 if(rnodb===rno) {
              let namesdb = res.rows.item(i).names;
              //alert(namesdb);
              let addressdb = res.rows.item(i).address;
              let phonedb = res.rows.item(i).phone;
              let chasisdb = res.rows.item(i).chasis;
              let nindb = res.rows.item(i).nin;
              setNames(namesdb);
              setAddress(addressdb);
              setPhone(phonedb);
              setChasis(chasisdb);
              setNin(nindb);
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
    <View style={styles.container} >
      
      <Header />
      <Text style={{color:'black', fontSize:15,}}> Search Record </Text>
      
      <TextInput 
       value={rno.toUpperCase()} onChangeText={setRno}
       placeholder='Enter Registration Number'
       style={styles.input}/>
       <TouchableOpacity style={styles.but} onPress={getRegister}>
                    <Text style={{textAlign:'center',padding:10,  color:'white', fontSize:20,  }} >Search</Text>
       </TouchableOpacity>
      
      <Text style={{color:'black', fontSize:20, marginBottom:10,}}> TAX PAYMENT </Text>
       <Text style={{color:'black', fontSize:15,}}> Name of Owner </Text>
       <TextInput 
       value={namesdb} onChangeText={setNames}
        placeholder='Name'
        style={styles.input}/>
      <Text style={{color:'black', fontSize:15,}}> Address</Text>
       <TextInput 
       value={addressdb} onChangeText={setAddress}
        placeholder='Address'
        style={styles.input}/>
      <Text style={{color:'black', fontSize:15,}}> Phone Number</Text>
       <TextInput 
       value={phonedb} onChangeText={setPhone}
        placeholder='Phone Number'
        style={styles.input}/>
     <Text style={{color:'black', fontSize:15,}}> Chasis Number </Text>
      <TextInput 
      placeholder='Chasis Number'
      value={chasisdb} onChangeText={setChasis}
     
      style={styles.input}/>
    <Text style={{color:'black', fontSize:15,}}> NIN Number </Text>
      <TextInput 
      //placeholder='NIN Number'
      value={nindb} onChangeText={setNin}
      
      style={styles.input}/>
    <Text style={{color:'black', fontSize:15,}}> Transaction Number(ID)</Text>
     <TextInput 
     value={transaction} onChangeText={setTransaction}
     placeholder='Enter Transaction ID'
     style={styles.input}/>
     <Text style={{color:'black', fontSize:15,}}> Amount in Words</Text>
     <TextInput 
     value={wAmount} onChangeText={setWamount}
      placeholder='Tax Amount in Words'
      style={styles.input}/>
      <Text style={{color:'black', fontSize:15,}}> Amount in Numbers</Text>
       <TextInput 
        placeholder='Tax Amount in Numbers'
        value={nAmount} onChangeText={setNamount}
        style={styles.input}/>
      <Text style={styles.text}> Date = {date.toDateString()}</Text>
      {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'android' ? 'spinner' : 'default'}
            is24Hour={true}
            onChange={onDateSelected}
            style={styles.datePicker}
          />
        )}

  <TouchableOpacity style={styles.but}>
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