import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const API_KEY = 'https://fakestoreapi.com/products';
const Products = () => {
  const {loading, data} = useFetch(API_KEY);

  const renderProducts = ({item}: any) => (
    <ProductCard products={item}></ProductCard>
  );

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large"></ActivityIndicator>
      ) : (
        <FlatList data={data} renderItem={renderProducts}></FlatList>
      )}
    </SafeAreaView>
  );
};

export default Products;
