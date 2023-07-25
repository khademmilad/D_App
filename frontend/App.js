import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login/Login';
import SignUp from './src/screens/SignUp/SignUp';


export default function App() {
  return (
    <View style={styles.root}>
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
