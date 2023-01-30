
import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  View,
} from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}}
   >
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
      </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default KeyboardAvoidingWrapper;