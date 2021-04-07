import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToolBar from './ToolBar';
import { primary } from '../theme/colors';
import LibraryStackScreen from './stacks/LibraryStackScreen';
import WishListScreen from '../screens/WishListScreen';
import AddNewScreen from '../screens/AddNewScreen';
import RentalsScreen from '../screens/RentalsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const indexNavigation = () => (
  <NavigationContainer>
    <StatusBar translucent backgroundColor="transparent" />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused }) => (
          <ToolBar focused={focused} route={route} />
        )
        ,
      })}
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Library" component={LibraryStackScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="AddNew" component={AddNewScreen} />
      <Tab.Screen name="Rentals" component={RentalsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default indexNavigation;
