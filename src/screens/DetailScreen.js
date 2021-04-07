import React from 'react';
import {
  View, Text, TouchableOpacity, Image, FlatList, ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../theme/styleLibrary';
import { primary } from '../theme/colors';

const DetailScreen = ({ navigation, route }) => {
  const { booksData } = useSelector((state) => state.books);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        height: 120, backgroundColor: 'white', margin: 7, alignItems: 'center', borderRadius: 10, padding: 10,
      }}
      onPress={() => navigation.navigate('Detail', {
        book: item,
      })}
    >
      <Image
        source={{ uri: item.image_url }}
        style={{ ...styles.imageBook, marginRight: 0 }}
      />
      <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={styles.container}
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
      <View style={{ height: 100, backgroundColor: 'red', marginTop: 10 }} />
    </ScrollView>
  );
};

export default DetailScreen;
