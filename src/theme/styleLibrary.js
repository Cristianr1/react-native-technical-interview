import { StyleSheet } from 'react-native';
import { green } from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  bookCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  detail: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    elevation: 10,
  },
  imageBook: {
    height: 80,
    width: 60,
    resizeMode: 'stretch',
    marginRight: 20,
  },
  detailImageBook: {
    height: 120,
    width: 90,
    resizeMode: 'stretch',
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 200,
  },
  author: { fontSize: 16 },
  available: {
    fontSize: 16,
    color: green,
    fontWeight: 'bold',
  },
  btnAdd: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 12,
    borderRadius: 30,
    width: '90%',
  },
  suggestions: {
    height: 120,
    backgroundColor: 'white',
    margin: 7,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleSuggestions: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  comments: {
    backgroundColor: 'white',
    marginHorizontal: 17,
    marginTop: 10,
    borderRadius: 10,
    padding: 15,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
