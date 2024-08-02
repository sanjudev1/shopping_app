import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { RootState } from '../store/store';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useRouter();
  const dispatch = useDispatch();
  const deliveryFee = 2;

  return (
    <SafeAreaView className='bg-white flex-1'>
      {/* back button */}
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
          onPress={() => navigation.back()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
        >
          <Icon.ArrowLeft stroke='white' strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl'>Your cart</Text>
          <Text className='text-center text-gray-500'>Selected Restaurant Name</Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className='flex-row px-4 items-center'
      >
        <Image source={require('../assets/deliveryboy/delivery.png')} className='w-20 h-20 rounded-full' />
        <Text className='flex-1 pl-4'>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className='font-bold' style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className='bg-white pt-5'
      >
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View
              key={item.id}
              className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
            >
              <Text className='font-bold' style={{ color: themeColors.text }}>
                {item.quantity} x
              </Text>
              <Image className='h-14 rounded-full' source={item.image} />
              <Text className='flex-1 font-bold text-gray-700'>{item.name}</Text>
              <Text className='font-semibold text-base'>${item.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(item.id))}
                className='p-1 rounded-full'
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white' />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View className='flex-1 justify-center items-center'>
            <Image className='h-80 w-80' source={require('../assets/deliveryboy/delivery.png')} />
            <Text className='text-center text-gray-700 py-4'>Your cart is empty.</Text>
          </View>
        )}
      </ScrollView>

      {/* totals */}
      {cartItems.length > 0 && (
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className='p-6 px-8 rounded-t-3xl space-y-4'
        >
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Subtotal</Text>
            <Text className='text-gray-700'>${cartTotal}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Delivery Fee</Text>
            <Text className='text-gray-700'>${deliveryFee}.00</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-700 font-extrabold'>Order Total</Text>
            <Text className='text-gray-700 font-extrabold'>${cartTotal + deliveryFee}.00</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.push('/orderpreparing')}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className='p-3 rounded-full'
            >
              <Text className='text-white text-center font-bold text-lg'>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
