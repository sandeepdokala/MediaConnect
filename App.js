import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homeScreen';
import HostAParty from './screens/hostParty';
import JoinAParty from './screens/joinAParty';

const Stack = createStackNavigator();

export default function App() {
  const navigationOptions = {
    headerStyle: { backgroundColor: "#9C13BC" },
    headerTitleStyle: { color: '#FFFFFF' },
    
  }
  
  return (
    <NavigationContainer>
      <StatusBar style='light'></StatusBar>
      <Stack.Navigator>
        <Stack.Screen options={navigationOptions} name="MediaConnect" component={HomeScreen} />
        <Stack.Screen options={navigationOptions} name="HostAParty" component={HostAParty} />
        <Stack.Screen options={navigationOptions} name="JoinAParty" component={JoinAParty} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
