import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as SQLite from 'expo-sqlite';
import DateTimePicker from '@react-native-community/datetimepicker';


const db = SQLite.openDatabase("db.db");

export default function Scan({navigation}) {

  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
	let ddate = date.toDateString();
 function showDatePicker() {
    setDatePicker(true);
  };
	
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
  
        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
        const [text, setText] = useState('Not yet scanned')
        const [money, setMoney] = useState('Balance unavailable')
      

    //    const getRegister =  () => {
          db.transaction(txn => {
            txn.executeSql(
              `SELECT * FROM Updated`,
              [],
              (sqlTxn, res) => {
               // alert(rno);
                console.log("retrieved Updated record successfully");
                let len = res.rows.length;
              
                if (len > 0) {
                  let results = [];
                  var money = '0.0';
                  parseFloat(money);
                  for (let i = 0; i < len; i++) {
                    let rnodb = res.rows.item(i).urno;
                    
                    if(rnodb===text) {

                    let amountdb = res.rows.item(i).unamount;
                    let datedb = res.rows.item(i).udate;

                    money = parseFloat(amountdb) + Number(money);
                   // console.log( amountdb, datedb );
                   console.log( money );
                    if(ddate != datedb ) {
                      let balan =0;
                       balan = money - 100.0;
                       console.log( bal);
                      db.transaction((tx) => {
                        tx.executeSql(
                          'UPDATE updated set unamount=?, udate=?  where urno=?',
                          [balan, ddate, text],
                          (tx, results) => {
                            console.log('Results', results.rowsAffected);
                            if (results.rowsAffected > 0) {
                              alert('Tax Deducted Successfully...')
                             // alert(balan)
                            } else alert('Error');
                          }
                        );
                      });
      

                    }else{
                      alert('Tax Already Deducted');
                    }
      
                  }
                  
                  }
                  console.log( money);
                  setMoney(money);
              //    if(ddate == datedb ) {

                 //    }
                }
                
              },
              error => {
                console.log("error on getting Register " + error.message);
         /*       
                
                */

              },
            );
          });
   //     }; 

       

        const askForCameraPermission = () => {
          (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          })()
        }
      
        // Request Camera Permission
        useEffect(() => { 
           askForCameraPermission();
           // getRegister();
        }, []);
      
        // What happens when we scan the bar code
        const handleBarCodeScanned = ({ type, data }) => {
          setScanned(true);
          setText(data)
          console.log('Type: ' + type + '\nData: ' + data)
        };
      
        // Check permissions and return the screens
        if (hasPermission === null) {
          return (
            <View style={styles.container}>
              <Text>Requesting for camera permission</Text>
            </View>)
        }
        if (hasPermission === false) {
          return (
            <View style={styles.container}>
              <Text style={{ margin: 10 }}>No access to camera</Text>
              <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
            </View>)
        }
    
  return (
    
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
    
      <Text style={styles.maintext}>{text}</Text>
      <Text style={styles.maintext}>Balance: {money}</Text>
      <Text style={styles.text}> Date = {date.toDateString()}</Text>
      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
      
      
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
                    <Text style={{textAlign:'center',padding:10,  color:'white', fontSize:20,  }} onPress={()=> {navigation.navigate('Login')}}>Logout</Text>
        </TouchableOpacity>
    </View>

  );}
  

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
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          maintext: {
            fontSize: 16,
            margin: 5,
          },
          barcodebox: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            width: 300,
            overflow: 'hidden',
            borderRadius: 30,
            backgroundColor: 'tomato'
          },

          text: {
            fontSize: 15,
            color: 'red',
            padding: 3,
            marginBottom: 10,
            textAlign: 'center'
          },

  });