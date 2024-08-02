import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styled } from 'nativewind'
import { ScrollView } from 'react-native'
import {categories} from '../constants/index'
import { TouchableOpacity } from 'react-native'

const Categories = () => {
    
    const [activeCategory,setactiveCategory] = useState<number | null>(null)
  return (
   <View>
    <ScrollView className='overflow-visible' horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={
        {paddingHorizontal:20}
    }>
        {
         categories.map((category,index)=>{
            let isActive = category.id==activeCategory;
            let btnClass = isActive? "bg-gray-800":"bg-gray-200";
            let textClass = isActive? 'font-semibold text-gray-800': 'text-gray-500'
            return(
                <View key={index} className="flex justify-center items-center mr-6">
                 <TouchableOpacity className={`p-1 rounded-full shadow ${btnClass}`} 
                 onPress={()=>setactiveCategory(category.id)} >
                    <Image style={{width:45,height:45}} source={category.image}/>
                    </TouchableOpacity> 
                    <Text className={"text-sm"+textClass}>{category.name}</Text>  
                </View>
            )
         })
        }
        
    </ScrollView>
   </View>
  )
}

export default Categories