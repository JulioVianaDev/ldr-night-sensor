import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Linking,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste nas tags</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
