import { StyleSheet, Text, View } from 'react-native';
import NewPassword from './src/screens/NewPassword/NewPassword';

export default function App() {
  return (
    <View style={styles.root}>
      <NewPassword />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
