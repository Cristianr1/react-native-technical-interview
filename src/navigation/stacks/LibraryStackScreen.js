import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryScreen from '../../screens/LibraryScreen';
import HeaderBackgroundImage from '../../components/navigationBar/HeaderBackgroundImage';
import ICNotifications from '../../components/navigationBar/ICNotifications';

const LibraryStack = createStackNavigator();

const LibraryStackScreen = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        headerTitleAlign: 'center',
        headerBackground: () => <HeaderBackgroundImage />,
        headerLeft: () => <ICNotifications />,
        // headerRight: () => <ShoppingCartIcon {...navigation} />,
        // headerTitle: () => (
        //   <Image
        //     source={require('../../assets/icon-laundry.png')}
        //     style={[
        //       Platform.OS == 'ios'
        //         ? {width: 40, height: 40, resizeMode: 'contain'}
        //         : {width: 50, height: 50, resizeMode: 'contain'},
        //     ]}
        //   />
        // ),
      }}
    />
    {/* <LibraryStack.Screen name="Details" component={SettingsScreen} /> */}
  </LibraryStack.Navigator>
);

export default LibraryStackScreen;
