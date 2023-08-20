import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import Swipe from './src/screens/Swipe/Swipe';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (

    <Provider store={store}>
      <Navigation />
    </Provider> 

    // <View style={styles.root}>
    //   <Navigation />
    //   {/* <Swipe /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
