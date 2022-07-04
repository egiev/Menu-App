import { Text, View } from 'react-native';

const List = ({ data }) => {
  return data.map((item, index) => (
    <View key={`${item}-${index}`}>
      <Text>{item}</Text>
    </View>
  ));
};

export default List;
