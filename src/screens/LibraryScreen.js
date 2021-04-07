import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../store/actions/booksAction';
import styles from '../theme/styleLibrary';

const LibraryScreen = ({ navigation }) => {
  console.log('lol')
  const dispatch = useDispatch();
  const { booksData, didInvalidate, errMessage } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => navigation.navigate('Detail', {
        book: item,
      })}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Image
          source={item.image_url ? { uri: item.image_url } : null}
          style={styles.imageBook}
        />
        <View>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (didInvalidate) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>{errMessage}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={booksData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// LibraryScreen.propTypes = {
//   focused: PropTypes.bool.isRequired,
//   route: PropTypes.shape({ name: PropTypes.string }).isRequired,
// };

export default LibraryScreen;
