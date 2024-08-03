import { View, Text, FlatList, Image, Button, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { themeColors } from '../theme';
import { router } from 'expo-router';
import * as Icon from 'react-native-feather'
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const carttotal = useSelector(selectCartTotal)
  const deliveryfee=40
  return(
    <View className='bg-white flex-1'>
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
          onPress={() => router.replace('/home')}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
        >
          <Icon.ArrowLeft stroke='white' strokeWidth={3} />
        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl mt-5'>Your cart</Text>
          <Text className='text-center text-gray-500'>Selected Shpoing Items</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className='flex-row px-7 items-center'
      >
        <Text className='flex-1 pl-4'>Order now delivery with in one day</Text>
        <TouchableOpacity>
          <Text className='font-bold' style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
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
              <Image className='h-14 w-14 rounded-full' source={{uri:item.image}} />
              <Text className='flex-1 font-bold text-gray-700'>{item.title}</Text>
              <Text className='font-semibold text-base'>${item.price.toFixed(2)}</Text>
            
              <TouchableOpacity
                onPress={() => dispatch(incrementQuantity(item.id))}
                className='p-1 rounded-full'
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Plus strokeWidth={2} height={20} width={20} stroke='white' />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(decrementQuantity(item.id))}
                className='p-1 rounded-full'
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white' />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View className='flex-1 justify-center items-center'>
            <Text className='text-center text-gray-700 py-4 mr-5 text-3xl'>Your cart is empty...</Text>
          </View>
        )}
      </ScrollView>
      {cartItems.length > 0 ? (
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className='p-6 px-8 rounded-t-3xl space-y-4'
        >
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Subtotal</Text>
            <Text className='text-gray-700'>${carttotal.toFixed(1)}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Delivery Fee</Text>
            <Text className='text-gray-700'>${deliveryfee}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-700 font-extrabold'>Order Total</Text>
            <Text className='text-gray-700 font-extrabold'>${carttotal.toFixed(1) + deliveryfee}</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => router.replace('/orderplacing')}
              style={{ backgroundColor: themeColors.bgColor(1) }}
              className='p-3 rounded-full'
            >
              <Text className='text-white text-center font-bold text-lg'>
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ):<Image source={require('../assets/deliveryboy/empty-cart.png')} className='absolute z-30 top-60 ml-7 h-72 w-72'/>}
    </View>
  )
};

export default Cart;
