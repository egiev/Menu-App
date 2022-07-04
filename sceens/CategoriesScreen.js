import { FlatList } from 'react-native';

import CategoryGridTitle from '../components/CategoryGridTitle';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTitle
          title={item.title}
          color={item.color}
          onPress={() =>
            navigation.navigate('MealsOverview', {
              title: item.title,
              categoryId: item.id,
            })
          }
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
