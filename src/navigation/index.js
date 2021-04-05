import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToolBar from './ToolBar';
import { primary } from '../theme/colors';
import LibraryStackScreen from './stacks/LibraryStackScreen';

const WishListScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Wishlist!</Text>
  </View>
);
const AddNewScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Add New!</Text>
  </View>
);

const RentalsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Rentals!</Text>
  </View>
);

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

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
