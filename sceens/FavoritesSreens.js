import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';

import { FavoritesContext } from '../store/context/favorites-context';

const FavoritesScreens = () => {
  const favoritesContent = useContext(FavoritesContext);
  const favorites = MEALS.filter((item) =>
    favoritesContent.ids.includes(item.id)
  );

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList data={favorites} />;
};

export default FavoritesScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#fff',
  },
});
