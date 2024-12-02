import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
//Redux part
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/authActions';
//navigation name
import ScreenNames from '../../navigation/ScreenNames';
//images folder
import images from '../../assets/images';
//common components
import UserInput from '../../Components/UserInput';
import CommonButton from '../../Components/Button';
import styles from './styles';

const LoginScreen = ({navigation}: any) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureText, setSecureText] = useState<boolean>(true);
  const {error, user} = useSelector((state: any) => state.auth);

  const handleLogin = () => {
    login(username, password); // using state management library - redux(thunk)
    if (user) {
      navigation.navigate(ScreenNames.HOME);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          source={images.WelcomeBanner}
          style={{height: 169, width: '100%'}}
        />
        <Text style={styles.welcomeText}>Welcome Back!!</Text>
        <Text style={styles.subText}>Log in to your existant account</Text>
      </View>
      <View style={styles.lowerContainer}>
        <UserInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={false}
        rightImage={false}
        />
        <UserInput
         placeholder="Password"
         secureTextEntry={secureText}
         value={password}
         onChangeText={setPassword}
        rightImage={true}
        secureTextClIck={() => setSecureText(!secureText)}
        />
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}
       <CommonButton
       buttonTitle={"LOGIN"}
       onPress={handleLogin}
       />
      </View>
    </View>
  );
};
export default LoginScreen;
