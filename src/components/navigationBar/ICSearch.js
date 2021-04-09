/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  View, TouchableOpacity, Image, Dimensions, TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import updateSearch from '../../store/actions/searchAction';

const { width } = Dimensions.get('window');

const ICSearch = () => {
  const dispatch = useDispatch();

  const [activateSearch, setActivateSearch] = useState(false);
  const [search, setSearch] = useState('');

  const onUpdateSearch = (text) => {
    setSearch(text);
    dispatch(updateSearch(text));
  };

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center' }}
    >
      {activateSearch
      && (
        <TextInput
          placeholder="Search Title..."
          placeholderTextColor="gray"
          style={{
            backgroundColor: 'white',
            width: width - 75,
            marginRight: 10,
            borderRadius: 15,
          }}
          onChangeText={(value) => onUpdateSearch(value)}
          value={search}
          maxLength={25}
          autoCapitalize="words"
        />
      )}
      <TouchableOpacity onPress={() => setActivateSearch(!activateSearch)}>
        <Image
          source={require('../../assets/NavigationBar/ic_search.png')}
          style={{ marginRight: 10, marginTop: 6 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ICSearch;
