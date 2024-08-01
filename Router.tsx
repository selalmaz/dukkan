import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './src/pages/Products';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Dükkan',
            statusBarColor: '#64b5f6',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
          }}></Stack.Screen>
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Dükkan',
            statusBarColor: '#64b5f6',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
