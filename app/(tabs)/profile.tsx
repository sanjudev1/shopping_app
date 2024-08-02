import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-orange-300">
      <View className="flex-1 items-center justify-center p-6">
        <View className="bg-orange-200 p-20 shadow-lg w-full rounded-full">
          <Image
            source={require('../assets/deliveryboy/2151150118.jpg')} // Update with your image path
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
          <Text className="text-2xl font-bold text-center text-blue-600 mb-2">John Doe</Text>
          <Text className="text-lg text-center text-green-700 mb-4">Software Engineer</Text>
          <Text className="text-base text-center text-pink-800">
            Passionate about building meaningful software solutions. Experienced in full-stack development and always eager to learn new technologies.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
