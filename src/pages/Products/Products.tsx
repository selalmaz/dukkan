import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const API_KEY = 'https://fakestoreapi.com/products';

const Products = ({ navigation }: any) => {
  const { error, loading, data } = useFetch<Product[]>(API_KEY);

  const ProductSelect = (id: number) => {
    navigation.navigate("DetailPage", { id });
  };

  const renderProducts = ({ item }: { item: Product }) => (
    <ProductCard 
      products={item} 
      onSelect={() => ProductSelect(item.id)} // onSelect fonksiyonunu callback olarak geçiyoruz
    />
  );

  if (error) {
    console.log('hata');
    return <Error />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList 
          data={data} 
          renderItem={renderProducts} 
          keyExtractor={item => item.id.toString()} // keyExtractor ile her bir öğeye benzersiz bir anahtar atıyoruz
        />
      )}
    </SafeAreaView>
  );
};

export default Products;
