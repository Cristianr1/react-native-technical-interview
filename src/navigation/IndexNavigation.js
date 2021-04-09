import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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
const Stack = createStackNavigator();

const IndexNavigation = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      {isLoggedIn ? (
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
      )
        : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
};

export default IndexNavigation;
