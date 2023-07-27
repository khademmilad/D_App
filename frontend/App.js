import { StyleSheet, Text, View } from 'react-native';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';

export default function App() {
  return (
    <View style={styles.root}>
      <ForgotPassword />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
