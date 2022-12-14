import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import CoinDetailedScreen from './src/screens/CoinDetailedScreen';
import HomeScreen from './src/screens/HomeScreen';
import BasicExample from './src/screens/TestScreen/TestSCreen';
import LineGraphComponent from './src/screens/TestScreen/TestSCreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <CoinDetailedScreen /> */}
      <LineGraphComponent />
      {/* <BasicExample /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:50,
  },
});
