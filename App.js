import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SCREEN } from './App/Services/NavigationService';
import LoginScreen from './App/Containers/Login/LoginScreen';
import MainScreen from './App/Containers/Main/MainScreen';
import SplashScreen from './App/Containers/Splash/SplashScreen';
import {SafeAreaProvider} from "react-native-safe-area-context"
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN.SPLASH.NAME}
            component={SplashScreen}
            options={{ 
              headerShown: false
            }}
          />

          <Stack.Screen
            name={SCREEN.MAIN.NAME}
            component={MainScreen}
            options={{ 
              headerShown: false,
              title: SCREEN.MAIN.TITLE
            }}
          />

          <Stack.Screen
            name={SCREEN.LOGIN.NAME}
            component={LoginScreen}
            options={{ 
              headerShown: false,
              title: SCREEN.LOGIN.TITLE
            }}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

export default App;
