import { StyleSheet } from 'react-native';
import {primary, green} from './colors';

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
    borderRadius: 10,
    padding: 30,
    marginBottom: 10,
    marginHorizontal: 15,
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
    fontSize: 20,
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
});
