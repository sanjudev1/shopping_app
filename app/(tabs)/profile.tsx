import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView className='flex-1 bg-yellow-200'>
      <View className='flex-1 items-center justify-center'>
        <View className='bg-yellow-200 p-6  w-full'>
          <Image
            source={require('../assets/deliveryboy/2151150118.jpg')} // Update with your image path
            className='w-32 h-32 rounded-full mx-auto mb-4'
          />
          <Text className='text-2xl font-bold text-center mb-2'>John Doe</Text>
          <Text className='text-gray-600 text-center mb-4'>Software Engineer</Text>
          <Text className='text-gray-700 text-center'>
            Passionate about building meaningful software solutions. Experienced in full-stack development and always eager to learn new technologies.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
