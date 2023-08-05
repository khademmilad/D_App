import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import Swipe from './src/screens/Swipe/Swipe';

export default function App() {
  return (
    <View style={styles.root}>
      {/* <Navigation /> */}
      <Swipe />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
