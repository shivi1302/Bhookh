import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const CommonButton = (props: any) => {
  return (
    <TouchableOpacity
          onPress={props.onPress}
          style={{
            backgroundColor: '#FF640D',
            width: '70%',
            padding: 10,
            alignSelf: 'center',
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#fff',
            }}>
            {props.buttonTitle}
          </Text>
        </TouchableOpacity>
  );
};
export default CommonButton;
