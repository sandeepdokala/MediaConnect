import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homeScreen';
import HostAParty from './screens/hostParty';
import InPartyScreen from './screens/inPartyScreen';
import JoinAParty from './screens/joinAParty';

const Stack = createStackNavigator();

export default function App() {
  const navigationOptions = {
    headerStyle: { backgroundColor: "#9C13BC" },
    headerTitleStyle: { color: '#FFFFFF' },
    
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={navigationOptions} name="MediaConnect" component={HomeScreen} />
        <Stack.Screen options={navigationOptions} name="HostAParty" component={HostAParty} />
        <Stack.Screen options={navigationOptions} name="JoinAParty" component={JoinAParty} />
        <Stack.Screen options={navigationOptions} name="InPartyScreen" component={InPartyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}