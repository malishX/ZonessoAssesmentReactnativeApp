import { Home } from '@/screens';
import ProductDetails from '@/screens/ProductDetails/ProductDetails';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import {
    HOME,
    PRODUCT_DETAILS
} from '../utils/Constants';
  
  
  // @refresh reset
  const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator
        // initialRouteName={PRODUCT_DETAILS}
        initialRouteName={HOME}
        screenOptions={
          Platform.OS == 'android'
            ? {
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerShown: false,
            }
            : {
              headerShown: false,
            }
        }
      >
     
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={PRODUCT_DETAILS} component={ProductDetails} />
      </Stack.Navigator>
    );
  };
  
  export default HomeNavigator;
  