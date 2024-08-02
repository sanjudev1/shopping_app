import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { ImageSourcePropType } from 'react-native';
import DishRow from '../components/dishrow';
import CartIcon from '../components/carticon';
import { StatusBar } from 'expo-status-bar';

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};

type Restaurant = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  category: string;
  reviews: string;
  stars: number;
  address: string;
  dishes: Dish[];
};

const RestaurantScreen = () => {
  const { name, stars, reviews, address, category, title, description, data } = useLocalSearchParams();
  const router = useRouter();

  // Parse the data safely
  const item: Restaurant = JSON.parse(decodeURIComponent(data as string));

  return (
    <View>
      <CartIcon/>
      <StatusBar style='light'/>
      <ScrollView>
        <View className='relative'>
          <Image source={require('../assets/images/dishes/download (1) (1).jpeg')} className='w-full h-72' />
          <TouchableOpacity
            className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
            onPress={() => router.back()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className='bg-white -mt-12 pt-6'>
          <View className='px-5'>
            <Text className='text-3xl font-bold'>{item.name}</Text>
            <View className='flex-row my-1 space-x-1 text-xs'>
              <View className='flex-row items-center space-x-1'>
                <Image source={require('../assets/images/dishes/download (1) (1).jpeg')} className='h-4 w-4' />
                <Text className='text-xs'>
                  <Text className='text-green-700'>{item.stars}</Text>
                  <Text className='text-gray-700'>
                    ({reviews} review) <Text className='font-semibold'>{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className='flex-row items-center my-2 space-x-2'>
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className='text-gray-700 text-sm'>Nearby . {typeof address === 'string' ? address.substring(0, 10) : ''}...</Text>
              </View>
            </View>
            <Text className='text-gray-700'>{description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {/* dishes */}
          {item.dishes.length > 0 ? (
            <View>
              {item.dishes.map((dish: Dish) => (
              <DishRow key={dish.id} dishitem={dish} />
              ))}
            </View>
          ) : (
            <Text className='text-gray-700 px-4 py-2'>No dishes available.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
