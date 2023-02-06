import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../components/Login';
import AdminLogin from './../components/AdminLogin';
import Admin from './../components/Admin';
import Staff from './../components/Staff';
import Users from './../components/Users';
import Update from './../components/Update';
import Welcome from './../components/Welcome';
import Register from './../components/Register';
import Scan from './../components/Scan';
import Record from './../components/Record';


  
const Stack = createNativeStackNavigator();
  
  const RootStack = ()=> {
    return (
      
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor: 'transparent',
          },
          headerTransparent:true,
          headerTitle:'',
        }}
        
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Staff" component={Staff} />
        <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default RootStack;