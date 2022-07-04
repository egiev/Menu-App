import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import MealDetails from '../components/MealDetails';
import List from '../components/List';
import IconButton from '../components/IconButton';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

const MealScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const favoritesContext = useContext(FavoritesContext);

  const meal = MEALS.find((item) => item.id === route.params.mealId);
  const isMealFavorite = favoritesContext.ids.includes(meal.id);

  const onSaveMeal = () => {
    if (isMealFavorite) {
      favoritesContext.removeFavorite(meal.id);
    } else {
      favoritesContext.addFavorite(meal.id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IconButton
              icon={isMealFavorite ? 'star' : 'star-o'}
              color="white"
              onPress={onSaveMeal}
            />
          </View>
        );
      },
    });
  }, [navigation, onSaveMeal]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text style={styles.heading}>{meal.title}</Text>
          <MealDetails
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
          />
          <View style={styles.card}>
            <Text style={styles.subHeading}>Ingredients</Text>
            <List data={meal.ingredients} />
          </View>
          <View style={styles.card}>
            <Text style={styles.subHeading}>Steps</Text>
            <List data={meal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 4,
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  card: {
    marginVertical: 8,
  },
});
