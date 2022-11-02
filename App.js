import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva'
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './pages/HomeScreen';




export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen></HomeScreen>
      <StatusBar/>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  modalView: {
    // margin:60,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 20,
    // padding: 35,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
