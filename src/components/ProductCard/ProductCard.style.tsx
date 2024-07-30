import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#bdbdbd',
    borderWidth:1,
    elevation: 7,
    flexDirection:'row'
  },
  image: {
    width: 100, 
    minHeight: 100, 
    borderRadius: 10,
    resizeMode:'center',
    backgroundColor:'white'

  },
  body_container: {
    flex:1,
    marginLeft: 10,
    justifyContent:'space-between'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 14,
    color: 'black',
    fontStyle:'italic',
    textAlign:'right'
  },
});
