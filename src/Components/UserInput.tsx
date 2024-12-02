import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../assets/images';
const UserInput = (props: any) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
      {props.rightImage ? (
        <TouchableOpacity onPress={props.secureTextClIck}>
          <Image source={images.secured} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default UserInput;
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
