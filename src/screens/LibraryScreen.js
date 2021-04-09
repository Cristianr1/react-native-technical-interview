import React, { useState, useEffect } from 'react';
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
import updateSearch from '../store/actions/searchAction';
import styles from '../theme/styleLibrary';
import ErrModal from '../components/ErrModal';

const LibraryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { booksData, didInvalidate, errMessage } = useSelector((state) => state.books);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [filterBooks, setFilterBooks] = useState([]);
  useEffect(() => {
    dispatch(fetchBooks());
    setFilterBooks(booksData);
    setErrorMessage(errMessage);
    setShowModal(didInvalidate);

    return () => dispatch(updateSearch(''));
  }, [didInvalidate]);

  const search = useSelector((state) => state.search);
  useEffect(() => {
    if (search) {
      const newArr = booksData
        .filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
      setFilterBooks(newArr);
    } else {
      setFilterBooks(booksData);
    }
  }, [booksData, search]);

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

  return (
    <View style={styles.container}>
      <ErrModal message={errorMessage} isVisible={showModal} hide={() => setShowModal(false)} />
      <FlatList
        data={filterBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

LibraryScreen.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LibraryScreen;
