import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import GameScreen from '../screens/GameScreen/GameScreen';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MenuScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
