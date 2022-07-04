import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter((item) =>
    item.categoryIds.includes(categoryId)
  );

  return <MealsList data={displayedMeals} />;
};

export default MealsOverviewScreen;
