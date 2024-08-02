import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { Link } from 'expo-router';
import { themeColors } from '../theme';

type Restaurant = {
  id: number;
  name: string;
  image: any; // Adjust as needed
  category: string;
  reviews: string;
  stars: number;
  address: string;
  dishes: Dish[];
};

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any; // Adjust as needed
};

type RestaurantCardProps = {
  item: Restaurant;
  title: string;
  description: string;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ item, title, description }) => {
  // Serialize and encode the item object
  const itemParams = encodeURIComponent(JSON.stringify(item));

  return (
    <TouchableWithoutFeedback>
      <Link
        href={{
          pathname: '/home',
          params: {
            data: itemParams,
            title,
            description,
          },
        }}
        className='mr-2'
      >
        <View style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }} className='bg-slate-100 rounded-3xl shadow-lg'>
          <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
          <View className='px-3 pb-4 space-y-2'>
            <Text className='text-lg font-bold pt-2'>{item.name}</Text>
            <View className='flex-row items-center space-x-1'>
              <Image source={require('../assets/images/dishes/download (1) (1).jpeg')} className='h-4 w-4' />
              <Text className='text-xs'>
                <Text className='text-green-700'>{item.stars}</Text>
                <Text className='text-gray-700'>
                  ({item.reviews} review). <Text className='font-semibold'>{item.category}</Text>
                </Text>
              </Text>
            </View>
            <View className='flex-row items-center space-x-1'>
              <Icon.MapPin color="gray" width="15" height="15" />
              <Text className='text-gray-700 text-sm'>Nearby . {item.address}</Text>
            </View>
          </View>
        </View>
      </Link>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
