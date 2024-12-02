import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import Controller from './controller';
import Loader from '../../Components/Loader';
import RecipeCard from '../../Components/RecipeCard';
import {useSelector} from 'react-redux';
import styles from './styles';
import CommonButton from '../../Components/Button';
import {logout} from '../../redux/actions/authActions';
import ScreenNames from '../../navigation/ScreenNames';

const HomeScreen = ({navigation}: any) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {user} = useSelector((state: any) => state.auth);

  const fetchRecipes = () => {
    Controller.getRecipes(setRecipes, setLoading, setError); // using Controllers
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  const handleLogout = () => {
    navigation.navigate(ScreenNames.LOGIN);
    logout;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{'Welcome Back, ' + user?.username}</Text>
      {loading && <Loader />}
      {error && <Text style={styles.error}>{error}</Text>}
      {!loading && !error && (
        <FlatList
          data={recipes}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}: any) => (
            <RecipeCard
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )}
        />
      )}
      <CommonButton buttonTitle={'Refresh'} onPress={fetchRecipes} />
      <CommonButton buttonTitle={'LOGOUT'} onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
