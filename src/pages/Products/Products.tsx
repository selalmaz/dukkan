import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const API_KEY = 'https://fakestoreapi.com/products';
const Products = () => {
  const {error,loading, data} = useFetch(API_KEY);

  const renderProducts = ({item}: any) => (
    <ProductCard products={item}></ProductCard>
  );

  if(error){
    console.log('hata')
     return <Error></Error>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      {loading ? (
        <Loading></Loading>
      ) : (
        <FlatList data={data} renderItem={renderProducts}></FlatList>
      )}
    </SafeAreaView>
  );
};

export default Products;
