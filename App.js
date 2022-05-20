
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Screen/LandingScreen';
import CustomerLanding from './Screen/CustomerLanding';
import HomeScreen from './Screen/HomeScreen';
import CustomerSignUp from './Screen/CustomerSignUp';
import CustomerLogin from './Screen/CustomerLogin';
import MerchantLogin from './Screen/MerchantLogin';
import MerchantSignup from './Screen/MerchantSignup';
import MerchantLanding from './Screen/MerchantLanding';
import MerchantDashboard from './Screen/MerchantDashboard';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        <Stack.Screen name="CustomerLanding" component={CustomerLanding} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="CustomerSignUp" component={CustomerSignUp} options={{headerShown:false}} />
        <Stack.Screen name="CustomerLogin" component={CustomerLogin} options={{headerShown:false}} />
        <Stack.Screen name="MerchantLogin" component={MerchantLogin} options={{headerShown:false}} />
        <Stack.Screen name="MerchantLanding" component={MerchantLanding} options={{headerShown:false}} />
        <Stack.Screen name="MerchantSignup" component={MerchantSignup} options={{headerShown:false}} />
        <Stack.Screen name="MerchantDashboard" component={MerchantDashboard} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}