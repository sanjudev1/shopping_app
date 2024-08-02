import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../slices/cartSlice';

const CartIcon = () => {
    const router = useRouter();
    const cartTotal =useSelector(selectCartTotal)
    const cartItems = useSelector(selectCartItems)
    if(!cartItems.length) return 
    const handlePress = () => {
        // Navigate to the cart page
        router.push('/cart');
      };
  return (
    <View className='absolute bottom-5 w-full z-50'>
     <TouchableOpacity 
     onPress={handlePress}
     style={{backgroundColor:themeColors.bgColor(1)}}
     className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg'>
     <View className='p-2 px-4 rounded-full' style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
        <Text className='font-extrabold text-white text-lg'>
            {cartItems.length}
        </Text>
     </View>
     <Text className='flex-1 text-center font-extrabold text-white text-lg'>
        View Cart
     </Text>
     <Text className='font-extrabold text-white text-lg'>
        ${cartTotal}
     </Text>
     </TouchableOpacity>
    </View>
    
  )
}

export default CartIcon
