import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import useFetchCustomHook from '../Custom Hooks/FetchCustomHook';
import AxiosCustomHook from '../Custom Hooks/AxiosCustomHook';
import ProductContainer from '../Components/Module Components/ProductContainer';

const Main = () => {
  // const [data,setData] = useFetchCustomHook('https://fakestoreapi.com/products?limit=3')
  const [data, setData] = AxiosCustomHook('https://fakestoreapi.com/products?limit=6');

  const deleteFunction = id => {
    console.log(id);

    const newArr = data.filter(item => item.id != id);
    setData(newArr);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{width:'100%',flexDirection:'row', flexWrap: 'wrap',}} showsVerticalScrollIndicator={false}>
        {data.map((val, index) => {
          return (
            <ProductContainer key={index} PropData={val} del={deleteFunction} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
