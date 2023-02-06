import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
import * as SQLite from 'expo-sqlite';
import Header from './Header';



const db = SQLite.openDatabase("db.db");


export default function Users() {


  const [records, setRecords] = useState([]);
  const [del, setDel] = useState('');

  const deleteUser = () => {
    db.transaction(txn => {
        txn.executeSql(
          `DELETE FROM staff`,
           [],
          (sqlTxn, res) => {
            console.log(`rno ${'de'} deleted  successfully`);
          },
          error => {
            console.log("error on adding Update " + error.message);
          },
        );
      });
    };
    
  
 
  const getUpdated = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM staff`,
        [],
        (sqlTxn, res) => {
         // alert(rno);
          console.log("retrieved Updated record successfully");
          let len = res.rows.length;
        
          if (len > 0) {
            let results = [];
            if (len > 0) {
                let results = [];
                for (let i = 0; i < len; i++) {
                  let item = res.rows.item(i);
                 // results.push({ id: item.id, rno: item.urno, name: item.unames,  address: item.uaddress, phone:item.uphone,  chasis: item.uchasis, nin: item.unin, transaction: item.utransaction,  wamount: item.uwamount, namount: item.unamount, ddate: item.udate});
                // results.push([  item.urno,  item.unames,  item.uaddress,  item.uphone,  item.uchasis, item.unin, item.utransaction,  item.uwamount, item.unamount, item.udate]);
                 results.push(item)
                }
                setRecords(results);
                console.log(results);
               //console.log(setRecords);
              }
          }
        },
        error => {
          console.log("error on getting Updated " + error.message);
        },
      );
    });
    }; 

    const renderCategory = ({ item }) => {
        return (
          <View style={{
            flexDirection: "column",
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderColor: "#ddd",
          }}>
            
            <Text style={{ marginRight: 10 }}>Name: {item.names}</Text>
            <Text>Username: {item.username}</Text>
            <Text>Password: {item.password}</Text>
        <TouchableOpacity style={styles.but}  onPress={deleteUser}>
                    <Text style={{textAlign:'center',padding:10,  color:'white', fontSize:20,  }} >Delete</Text>
        </TouchableOpacity>
          </View>
          
        );
      };
    

    useEffect( () => {
       getUpdated();
      }, []);
     
     
   
  
  return (
    
        
    <View style={styles.container} >
    
      <Text style={{color:'black', fontSize:20, marginTop:10, borderBottomWidth: 1,}}> Staff Record </Text> 
      <FlatList
        data={records}
        renderItem={renderCategory}
        key={cat => cat.id}
      />
       
        
    </View>
 
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

 
  text: {
    fontSize: 15,
    color: 'black',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
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

});
