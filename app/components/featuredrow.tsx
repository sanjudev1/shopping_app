import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import { ScrollView } from 'react-native';
import RestaurantCard from './restaurantCard';
import { ImageSourcePropType } from 'react-native';

// Define the type for restaurant
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
  image:any;
 // Adjust as needed
};


// Define the props type for FeaturedRow
type FeaturedRowProps = {
  title: string;
  description: string;
  restaurants?: Restaurant[];
};

const FeaturedRow: React.FC<FeaturedRowProps> = ({ title, description, restaurants }) => {
  return (
    <View >
        <View className='flex-row justify-between items-center px-4'>
        <View>
        <Text className="text-lg font-bold">{title}</Text>
        <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}} className='font-semibold'>See All</Text>
        </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
        {paddingHorizontal:15}

        }
        className='overflow-visible py-5'>
            
                 {restaurants?.length ? (
                    restaurants.map((restaurant, index) => (
                      <RestaurantCard key={index} item={restaurant} title={title} description={description}/>
                    ))
                  ) : (
                    <Text>No Restaurants Available</Text>
                  )}
        
        </ScrollView>
    </View>
  );
};

export default FeaturedRow;
