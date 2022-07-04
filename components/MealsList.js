import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

const MealsList = ({ data }) => {
  const navigation = useNavigation();

  const onPress = (mealId) => {
    navigation.navigate('Meal', { mealId });
  };

  const renderMeals = ({ item }) => {
    const mealProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealProps} onPress={onPress.bind(this, item.id)} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
