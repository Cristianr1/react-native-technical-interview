import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '../../screens/LibraryScreen';
import DetailScreen from '../../screens/DetailScreen';
import HeaderBackgroundImage from '../../components/navigationBar/HeaderBackgroundImage';
import ICNotifications from '../../components/navigationBar/ICNotifications';
import ICSearch from '../../components/navigationBar/ICSearch';
import ICBack from '../../components/navigationBar/ICBack';

const LibraryStack = createStackNavigator();

const LibraryStackScreen = () => (
  <LibraryStack.Navigator
    screenOptions={{
      headerTitleStyle: {
        color: 'white',
      },
    }}
  >
    <LibraryStack.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        title: 'LIBRARY',
        headerTitleAlign: 'center',
        headerBackground: () => <HeaderBackgroundImage />,
        headerLeft: () => <ICNotifications />,
        headerRight: () => <ICSearch />,
      }}
    />
    <LibraryStack.Screen
      name="Detail"
      component={DetailScreen}
      options={({ navigation }) => ({
        title: 'BOOK DETAIL',
        headerTitleAlign: 'center',
        headerBackground: () => <HeaderBackgroundImage />,
        headerLeft: () => <ICBack goLibrary={() => navigation.navigate('Library')} />,
      })}
    />
  </LibraryStack.Navigator>
);

export default LibraryStackScreen;
