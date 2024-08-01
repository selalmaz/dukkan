import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const API_KEY = 'https://fakestoreapi.com/products';

const Detail = ({ route }: any) => {
  const { id } = route.params;
  const { loading, error, data } = useFetch<Product>(`${API_KEY}/${id}`);
  console.log(`${API_KEY}/${id}`);

  if (error) {
    console.log('hata');
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return null; // veya uygun bir hata mesajı
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body_container}>
      <Image style={styles.Image} source={{ uri: data.image }} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>
      <Text style={styles.price}>{data.price}₺</Text>
      </View>
      
    </SafeAreaView>
  );
};

export default Detail;
