import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable android_ripple={{ color: '#ccc' }} onPress={onPress}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
    margin: 8,
  },
});
