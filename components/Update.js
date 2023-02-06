import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
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

  const [rno, setRnodb ] = useState('');
  const [names, setNamesdb ] = useState('');
  const [address, setAddressdb] = useState('');
  const [phone, setPhonedb] = useState('');
  const [chasis, setChasisdb] = useState('');
  const [nin, setNindb] = useState('');
  const [transaction, setTransaction] = useState('');
  const [ wAmount, setWamount] = useState('');
  const [ nAmount, setNamount] = useState('');
  let [rnou, setRnou ] = useState('');
  const  dddate = date.toDateString()


 

   
 /*
  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS updated (id INTEGER PRIMARY KEY AUTOINCREMENT, urno VARCHAR(200), unames VARCHAR(200), uaddress VARCHAR(200), uphone VARCHAR(200), uchasis VARCHAR(200), unin VARCHAR(200), utransaction VARCHAR(200) NOT NULL UNIQUE, uwamount VARCHAR(200), unamount VARCHAR(200), udate VARCHAR(200))`,
        [],
        (sqlTxn, res) => {
          console.log("Update table created successfully");
        },
        error => {
          console.log("error on creating Update table " + error.message);
        },
      );
    });
  };
  useEffect(() => {
                
    }, []);
  
 */

    const addUpdate = () => {
      db.transaction(txn => {
          txn.executeSql(
            `INSERT INTO updated (urno, unames, uaddress, uphone, uchasis, unin, utransaction, uwamount, unamount, udate) VALUES (?,?,?,?,?,?,?,?,?,?)`,
             [rno, names, address, phone, chasis, nin, transaction, wAmount, nAmount, dddate],
            (sqlTxn, res) => {
              console.log(`rno ${rno} and date ${dddate} and amount ${nAmount} added successfully`);
              alert('Record added successfully');
            },
            error => {
              console.log([rno, names, address, phone, chasis, nin, transaction, wAmount, nAmount, dddate,])
              console.log("error on adding Update " + error.message);
              alert('Record already exist');
            },
          );
        });
      };

  const getRegister = () => {

    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM register`,
        [],
        (sqlTxn, res) => {
         // alert(rno);
          console.log("retrieved Register record successfully");
          let len = res.rows.length;
        
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let rnodb = res.rows.item(i).rno;
              console.log(rnodb)
              console.log(rnou)
              if(rnodb===rnou) {
              const rnodbb = res.rows.item(i).rno;
              const namesdb = res.rows.item(i).names;
              //alert(namesdb);
              const addressdb = res.rows.item(i).address;
              const phonedb = res.rows.item(i).phone;
              const chasisdb = res.rows.item(i).chasis;
              const nindb = res.rows.item(i).nin;
              setNamesdb(namesdb);
              setAddressdb(addressdb);
              setPhonedb(phonedb);
              setChasisdb(chasisdb);
              setNindb(nindb);
              setRnodb(rnodbb);

            }
            }
          }
        },
        error => {
          console.log("error on getting Register " + error.message);
        },
      );
    });
    }; 
   
   
   
     
     // console.log(rno)
     // console.log(transaction)
       //alert(namesdb)
     //  console.log(dddate)
      // console.log(chasisdb)
   
  
  return (
    <KeyboardAvoidingWrapper>
    <View style={styles.container} >
      
      <Header />
      <Text style={{color:'black', fontSize:15,}}> Search Record </Text> 
      <TextInput 
       value={rnou.toUpperCase()} onChangeText={setRnou}
       placeholder='Enter Registration Number'
       style={styles.input}/>
      <TouchableOpacity style={styles.but} onPress={getRegister} >
          <Text style={{textAlign:'center',padding:10,  color:'white', fontSize:20,  }} >Search</Text>
      </TouchableOpacity>
      <Text style={{color:'black', fontSize:20, marginBottom:10,}}> TAX PAYMENT </Text>
       <Text style={{color:'black', fontSize:15,}}> Registration Number </Text>
       <TextInput 
       editable={false}
       value={rno.toUpperCase()}  
       placeholder='Enter Registration Number'
       style={styles.input}/>
       <Text style={{color:'black', fontSize:15,}}> Name of Owner </Text>
       <TextInput 
       value={names}  onChangeText={setNamesdb}
        placeholder='Name'
        style={styles.input}/>
      <Text style={{color:'black', fontSize:15,}}> Address</Text>
       <TextInput 
       value={address} onChangeText={setAddressdb}
        placeholder='Address'
        style={styles.input}/>
      <Text style={{color:'black', fontSize:15,}}> Phone Number</Text>
       <TextInput 
       value={phone} onChangeText={setPhonedb}
        placeholder='Phone Number'
        style={styles.input}/>
     <Text style={{color:'black', fontSize:15,}}> Chasis Number </Text>
      <TextInput 
      placeholder='Chasis Number'
      value={chasis}  onChangeText={setChasisdb}
      style={styles.input}/>
    <Text style={{color:'black', fontSize:15,}}> NIN Number </Text>
      <TextInput 
      //placeholder='NIN Number'
      value={nin}  onChangeText={setNindb}
      style={styles.input}/>
    <Text style={{color:'black', fontSize:15,}}> Transaction ID</Text>
     <TextInput 
     value={transaction.toUpperCase()} onChangeText={setTransaction}
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
        keyboardType = 'numeric'
        inputMode ='decimal'
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

  <TouchableOpacity style={styles.but} onPress={addUpdate} >
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
