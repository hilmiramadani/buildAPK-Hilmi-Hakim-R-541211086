import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Login from './components/login';
import Register from './components/register';
import Porto from './components/porto';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='porto' component={Porto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;