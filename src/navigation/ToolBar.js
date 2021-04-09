/* eslint-disable global-require */
import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

const ToolBar = ({ focused, route }) => {
  const icons = [
    {
      name: 'Library',
      image: <Image
        source={require('../assets/ToolBar/ic_library.png')}
      />,
      imageActive: <Image
        source={require('../assets/ToolBar/ic_library_active.png')}
      />,
    },
    {
      name: 'WishList',
      image: <Image
        source={require('../assets/ToolBar/ic_wishlist.png')}
      />,
      imageActive: <Image
        source={require('../assets/ToolBar/ic_wishlist_active.png')}
      />,
    },
    {
      name: 'AddNew',
      image: <Image
        source={require('../assets/ToolBar/ic_add_new.png')}
      />,
      imageActive: <Image
        source={require('../assets/ToolBar/ic_add_new_active.png')}
      />,
    },
    {
      name: 'Rentals',
      image: <Image
        source={require('../assets/ToolBar/ic_myrentals.png')}
      />,
      imageActive: <Image
        source={require('../assets/ToolBar/ic_myrentals_active.png')}
      />,
    },
    {
      name: 'Settings',
      image: <Image
        source={require('../assets/ToolBar/ic_settings.png')}
      />,
      imageActive: <Image
        source={require('../assets/ToolBar/ic_settings_active.png')}
      />,
    },
    {
      name: 'Login',
      image: <Image
        source={require('../assets/ToolBar/ic_settings.png')}
      />,
      imageActive: <Image
        source={require('../assets/ToolBar/ic_settings_active.png')}
      />,
    },
  ];

  return (
    <View>
      {focused
        ? icons.find((icon) => icon.name === route.name).imageActive
        : icons.find((icon) => icon.name === route.name).image}
    </View>
  );
};

ToolBar.propTypes = {
  focused: PropTypes.bool.isRequired,
  route: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default ToolBar;
