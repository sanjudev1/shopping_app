import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView,{Marker} from 'react-native-maps';
import { featured } from '../constants/index';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'
import { useRouter } from 'expo-router';
const delivery = () => {
    const navigation = useRouter()
    const restaurant = featured.restaurants[0]
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      return (
        <View className='flex-1'>
          <MapView
            initialRegion={tokyoRegion}
            //onRegionChangeComplete runs when the user stops dragging MapView
           className='flex-1'
           mapType='standard'
          >
          <Marker
          coordinate={tokyoRegion}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
          />
          </MapView>
          <View className='rounded-t-3xl -mt-12 bg-white relative'>
            
                <View className='flex-row px-5 pt-10'>
                <View>
                <Text className='text-lg text-gray-700 font-semibold'>
                    Estimated Arrival 
                </Text>
                <Text className='text-3xl font-extrabold text-gray-700'>
                    20-30 minutes
                </Text>
                <Text className='mt-2 text-gray-700 font-semibold'>
                    Your order is own its way!
                </Text>
                </View>
               <Image className='w-24 h-24' source={require('../assets/deliveryboy/delivery.png')}/>
               </View>
         <View
         style={{backgroundColor:themeColors.bgColor(0.8)}}
         className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'
         >
         <View className='p-1 rounded-full'
         style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
            <Image className='h-16 w-16 rounded-full ' source={require('../assets/deliveryboy/2151150118.jpg')}/>
         </View>
         <View className='flex-1 ml-3'>
            <Text className='text-lg fond-bold text-white'>
                ai robot
            </Text>
            <Text className='text-lg fond-bold text-white'>
                your Rider 
            </Text>
         </View>
         <View className='flex-row items-center space-x-3 mr-3'>
            <TouchableOpacity className='bg-white p-2 rounded-full'>
                <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.push('/')}
            className='bg-white p-2 rounded-full'>
                <Icon.X  stroke='red' strokeWidth={4}/>
            </TouchableOpacity>

         </View>
         </View>
          
          </View>

        </View>
      );
}

export default delivery