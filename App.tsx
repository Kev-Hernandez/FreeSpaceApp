import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/Presentation/screen/Login/LoginScreen';
import RegisterScreen from './src/Presentation/screen/Register/RegisterScreen';
import OnboardingScreen from './src/Presentation/screen/Onboarding/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/Presentation/screen/ProductsList/ProductList';
import ProfileInfoScreen from './src/Presentation/screen/Profile/Info/ProfileInfo';
import SpaceScreen from './src/Presentation/screen/Space/SpaceScreen';
import SecondSpaceScreen from './src/Presentation/screen/Space/SecondSpaceScreen';
import FormularioScreen from './src/Presentation/screen/Space/FormularioScreen';
import Tabs from './src/Presentation/screen/Profile/Info/Tabs';

export type RootSatckParamList = {
  Onboarding: undefined;
  LoginScreen: undefined;
  Register: undefined;
  ProductList: undefined;
  Profile: undefined;
  Space: undefined;
  SecondSpace: undefined;
  FormularioScreen:undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootSatckParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="Profile" component={ProfileInfoScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Space" component={SpaceScreen}options={{headerShown:false}} />
          <Stack.Screen name='SecondSpace' component={SecondSpaceScreen}options={{headerShown:false}}/>
          <Stack.Screen name='FormularioScreen' component={FormularioScreen}options={{headerShown:false}}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
