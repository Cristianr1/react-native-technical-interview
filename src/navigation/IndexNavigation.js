import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import ToolBar from './ToolBar';
import { primary } from '../theme/colors';
import LoginScreen from '../screens/LoginScreen';
import LibraryStackScreen from './stacks/LibraryStackScreen';
import WishListScreen from '../screens/WishListScreen';
import AddNewScreen from '../screens/AddNewScreen';
import RentalsScreen from '../screens/RentalsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const IndexNavigation = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
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
        {isLoggedIn ? (
          <>

            <Tab.Screen name="Library" component={LibraryStackScreen} />
            <Tab.Screen name="WishList" component={WishListScreen} />
            <Tab.Screen name="AddNew" component={AddNewScreen} />
            <Tab.Screen name="Rentals" component={RentalsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </>
        )
          : (
            <Tab.Screen
              name="Login"
              component={LoginScreen}
              options={{ tabBarVisible: false }}
            />
          )}
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default IndexNavigation;
