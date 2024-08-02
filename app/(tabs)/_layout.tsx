import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { themeColors } from '../theme';

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: themeColors.bgColor(1), 
        tabBarStyle:{
          backgroundColor: '#161622'
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cart-plus" color={color} />,
        }}
      />
       <Tabs.Screen
        name="orderplacing"
        options={{
          title: 'Order Preparing',
          headerShown: false,
          href:null,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="spinner" color={color} />,
          
        }}
      />
      
    </Tabs>
    
  );
}

export default TabsLayout;