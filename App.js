
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
import WishlistScreen from './Screen/WishlistScreen';
import ProfileScreen from './Screen/ProfileScreen';
import CategoryScreen from './Screen/CategoryScreen';
import MerchantCategory from './Screen/MerchantCategory';
import MerchantOrders from './Screen/MerchantOrders';
import MerchantProfile from './Screen/MerchantProfile';

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
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} options={{headerShown:false}} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown:false}} />
        <Stack.Screen name="MerchantCategory" component={MerchantCategory} options={{headerShown:false}} />
        <Stack.Screen name="MerchantOrders" component={MerchantOrders} options={{headerShown:false}} />
        <Stack.Screen name="MerchantProfile" component={MerchantProfile} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}