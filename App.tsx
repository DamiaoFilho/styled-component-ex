import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home/index';
import MultiTabRoutes from './src/routes';
export default function App() {
  return (
    <View style={styles.container}>
      <MultiTabRoutes></MultiTabRoutes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
