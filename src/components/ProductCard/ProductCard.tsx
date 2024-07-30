import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({products}: any) => {
  return (
    <View style={styles.container}>
      <Image 
    style={styles.image}
      source={{uri: products.image}}></Image>
      <View style={styles.body_container}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price} TL</Text>
      </View>
    </View>
  );
};

export default ProductCard
