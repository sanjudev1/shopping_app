import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather";
import { ScrollView, TextInput } from 'react-native'
import { themeColors } from './theme'
import Categories from './components/categories'
import { featured } from './constants'
import FeaturedRow from './components/featuredrow'



const App = () => {
  return (
    <SafeAreaView className='bg-white'>
    <StatusBar  style='auto'/>
    {/* search bar */}
    <View className='flex-row items-center space-x-2 px-4 pb-2'>
      <View className='flex-row flex-1 items-center p-3 rounded-full border  border-gray-300'>
         <Icon.Search height={25} width={25} stroke='gray'/>
         <TextInput placeholder='Restuarants' className='ml-2 flex-1' />
         <View className='flex-row items-center space-x-1  pl-2 border-gray-300'>
         <Icon.MapPin  height={25} width={20} stroke='gray'/>
         <Text className='text-gray-600'>New York</Text>
         </View>
      </View>
    <View style={{backgroundColor: themeColors.bgColor(1)}} className='p-3 rounded-full'> 
      <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke='gray'/>
    </View>
    </View>
    {/* categories */}
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
  
   <Categories/>
   {/* features */}
   <View className='mt-5'>
     {
      [featured,featured,featured,featured].map((item,index)=>{
        return(
          <FeaturedRow 
          key={index}
          title={item.title}
          restaurants={item.restaurants}
          description={item.description}
          />
        )
      })
     }
     
   </View>
   </ScrollView>
    </SafeAreaView>
  )
}

export default App;