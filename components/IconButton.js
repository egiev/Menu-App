import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: '#ccc' }}>
      <FontAwesome name={icon} size={20} color={color} />
    </Pressable>
  );
};
export default IconButton;
