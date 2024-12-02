import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#E5E5E5',
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
    welcomeText: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subText: {
      fontSize: 18,
      fontWeight: 'regular',
      textAlign: 'center',
    },
    lowerContainer: {
      flex: 0.4,
    },
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
  export default styles;