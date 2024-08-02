import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { Product } from '../components/types';
import Modal from 'react-native-modal';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center text-blue-700 mb-4 mt-5">Welcome to Our Store</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => openModal(item)} className="mb-4 rounded-lg shadow-md bg-white border border-gray-200">
            <View className="p-4">
              <Image source={{ uri: item.image }} className="h-40 w-full object-cover rounded-md mb-2" />
              <Text className="text-lg font-semibold text-gray-800">{item.title}</Text>
              <Text className="text-gray-600">${item.price.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {selectedProduct && (
        <Modal isVisible={modalVisible} onBackdropPress={closeModal}>
          <View className="bg-white p-6 rounded-lg">
            <Image source={{ uri: selectedProduct.image }} className="w-full h-64 object-contain" />
            <Text className="mt-4 text-xl font-bold text-gray-800">{selectedProduct.title}</Text>
            <Text className="mt-2 text-gray-600">{selectedProduct.description}</Text>
            <Text className="mt-4 text-xl font-semibold text-gray-800">${selectedProduct.price.toFixed(2)}</Text>
            <View className="flex-row mt-6 space-x-4">
              <TouchableOpacity 
                onPress={() => {
                  dispatch(addToCart(selectedProduct));
                  closeModal();
                }}
                className="flex-1 bg-blue-500 py-2 rounded-lg"
              >
                <Text className="text-center text-white font-semibold">Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} className="flex-1 bg-gray-300 py-2 rounded-lg">
                <Text className="text-center text-black font-semibold">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Home;
