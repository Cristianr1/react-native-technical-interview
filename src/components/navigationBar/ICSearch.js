/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  View, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

const { width } = Dimensions.get('window');

const ICSearch = () => {
  const [activateSearch, setActivateSearch] = useState(false);
  const [search, setSearch] = useState('');

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      {activateSearch
      && (
      <SearchBar
        placeholder="Search Title..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{
          width: width / 1.2,
          marginLeft: 5,
          marginRight: 10,
          backgroundColor: 'transparent',
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
        inputContainerStyle={{ backgroundColor: 'gainsboro' }}
      />
      )}
      <TouchableOpacity onPress={() => setActivateSearch(!activateSearch)}>
        <Image
          source={require('../../assets/NavigationBar/ic_search.png')}
          style={{ marginRight: 10, marginTop: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ICSearch;
