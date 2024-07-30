import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const API_KEY = 'https://fakestoreapi.com/products';
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API_KEY);
    setData(response.data);
  };

  const renderProducts = ({item}: any) => (
    <ProductCard products={item}></ProductCard>
  );

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProducts}></FlatList>
    </SafeAreaView>
  );
};

export default Products;
