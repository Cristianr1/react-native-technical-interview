/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, TouchableOpacity, Image, FlatList, ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../theme/styleLibrary';
import { primary } from '../theme/colors';

const DetailScreen = ({ navigation, route }) => {
  const { booksData } = useSelector((state) => state.books);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestions}
      onPress={() => navigation.navigate('Detail', {
        book: item,
      })}
    >
      <Image
        source={{ uri: item.image_url }}
        style={{ ...styles.imageBook, marginRight: 0 }}
      />
      <Text style={styles.titleSuggestions}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={[styles.container, { marginTop: 25 }]}
      persistentScrollbar
    >
      <View style={styles.detail}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Image
            source={route.params.book.image_url ? { uri: route.params.book.image_url } : null}
            style={styles.detailImageBook}
          />
          <View>
            <Text style={styles.title}>
              {route.params.book.title}
            </Text>
            <Text style={styles.available}>Available</Text>
            <Text style={styles.author}>{route.params.book.author}</Text>
            <Text style={styles.author}>{route.params.book.year}</Text>
            <Text style={styles.author}>{route.params.book.genre}</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.btnAdd, { borderColor: primary, borderWidth: 2 }]}>
          <Text style={{ color: primary, fontWeight: 'bold' }}>ADD TO WISH LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnAdd, { backgroundColor: primary, marginTop: 10 }]}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>RENT</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <FlatList
          data={booksData.filter((book) => book.genre === route.params.book.genre
            && book.id !== route.params.book.id)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
      {route.params.book.comments && (
      <View style={styles.comments}>
        {route.params.book.comments.map((item) => (
          <View
            style={styles.comment}
            key={item.id}
          >
            <Image
              source={item.id % 2
                ? require('../assets/General/img_user1.png') : require('../assets/General/img_user2.png')}
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {item.user}
              </Text>
              <Text style={{ fontSize: 14, width: '35%' }}>
                {item.comment}
              </Text>
            </View>
          </View>
        ))}
      </View>
      )}
    </ScrollView>
  );
};

DetailScreen.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
  route: PropTypes.shape({
    params: PropTypes.oneOfType([PropTypes.object]).isRequired,
  }).isRequired,
};

export default DetailScreen;
