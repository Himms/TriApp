import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default function Scan({navigation}) {
  
        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
        const [text, setText] = useState('Not yet scanned')
      
        const askForCameraPermission = () => {
          (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          })()
        }
      
        // Request Camera Permission
        useEffect(() => {
          askForCameraPermission();
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

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
      
      
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
            margin: 20,
          },
          barcodebox: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            width: 300,
            overflow: 'hidden',
            borderRadius: 30,
            backgroundColor: 'tomato'
          }

  });