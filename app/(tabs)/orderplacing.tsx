import { useFocusEffect ,router} from 'expo-router';
import React, { useEffect ,useCallback } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { themeColors } from '../theme';

// Delay function to simulate navigation after a delay

const OrderPlaced = () => {
  
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        router.replace('/home');
      }, 5000);

      return () => clearTimeout(timer); // Clear timer on focus change
    }, [router])
  );

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Image
        source={require('../assets/deliveryboy/ready.png')} 
        className="w-48 h-48 mb-6"/>
      <Text className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Purchase!</Text>
      <Text className="text-lg text-gray-600 mb-8">We appreciate your business. Please visit again!</Text>
      <TouchableOpacity
        onPress={() => router.replace('/home')}
        style={{ backgroundColor: themeColors.bgColor(2) }}
        className="p-3 rounded-full"
      >
        <Text className="text-white text-center font-bold text-lg">Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderPlaced;