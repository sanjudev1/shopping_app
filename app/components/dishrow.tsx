import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { ImageSourcePropType } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemById } from '../slices/cartSlice';
import { RootState } from '../store/store';

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

type DishRowProps = {
  dishitem: Dish;
};

const DishRow: React.FC<DishRowProps> = ({ dishitem }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state: RootState) => selectCartItemById(dishitem.id)(state));

  const handleIncrease = () => {
    dispatch(addToCart({
      id: dishitem.id,
      name: dishitem.name,
      price: dishitem.price,
      image: dishitem.image,
      quantity: 1, 
    }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart(dishitem.id));
  };

  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image
        className='rounded-3xl'
        style={{ height: 100, width: 100 }}
        source={dishitem.image}
      />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{dishitem.name}</Text>
          <Text className='text-gray-700'>{dishitem.description}</Text>
        </View>
        <View className='flex-row justify-between pl-3 items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${dishitem.price}</Text>
          <View className='flex-row items-center'>
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={!totalItems || totalItems.quantity === 0}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus stroke='white' strokeWidth={2} height={20} width={20} />
            </TouchableOpacity>
            <Text className='px-3'>{totalItems ? totalItems.quantity : 0}</Text> 
            <TouchableOpacity
              onPress={handleIncrease}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus stroke='white' strokeWidth={2} height={20} width={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
