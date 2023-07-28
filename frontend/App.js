import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';


export default function App() {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
