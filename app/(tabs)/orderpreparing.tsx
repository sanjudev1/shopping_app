import { useFocusEffect ,router} from 'expo-router';
import React, { useEffect ,useCallback } from 'react';
import { View, Image } from 'react-native';

// Delay function to simulate navigation after a delay

const OrderPreparing = () => {
  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        router.replace('/delivery');
      }, 2000);

      return () => clearTimeout(timer); // Clear timer on focus change
    }, [router])
  );

  return (
    <View className="flex-1 bg-[#fef3c7] justify-center items-center">
      <Image
        source={require('../assets/deliveryboy/location.png')}
        style={{ width: 384, height: 384, borderRadius: 20, position: 'absolute', zIndex: -20, top: 56 }}
      />
      <Image
        source={require('../assets/deliveryboy/delivery.png')}
        style={{ width: 320, height: 320 }}
      />
    </View>
  );
};

export default OrderPreparing;
