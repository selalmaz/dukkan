import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  body_container: {
    padding: 5,
  },
  Image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor:'white'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    
  },
  desc: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
    textAlign: 'justify',
    fontStyle:'italic'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'right',
    marginVertical:5
  },
});
