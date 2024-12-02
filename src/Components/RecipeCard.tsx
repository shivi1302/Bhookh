import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RecipeCard = ({title, description, image}: any) => (
  <View style={styles.card}>
    <Image
      source={{
        uri:
          image ||
          'https://w7.pngwing.com/pngs/156/887/png-transparent-local-food-ottawa-computer-icons-restaurant-others-miscellaneous-food-company.png',
      }}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {margin: 10, padding: 10, backgroundColor: '#f8f8f8', borderRadius: 8},
  image: {width: '100%', height: 150, borderRadius: 8},
  title: {fontWeight: 'bold', fontSize: 16, marginVertical: 5},
  description: {color: '#555'},
});

export default RecipeCard;
