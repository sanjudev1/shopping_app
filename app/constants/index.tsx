import { ImageSourcePropType } from 'react-native';

export const categories: {
  id: number;
  name: string;
  image: ImageSourcePropType;
}[] = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/images_asserts/icons8-pizza-96.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/images_asserts/icons8-hamburger-96.png'),
  },
  {
    id: 3,
    name: 'Cupcake',
    image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
  },
  {
    id: 4,
    name: 'Sushi',
    image: require('../assets/images_asserts/icons8-spaghetti-96.png'),
  },
  {
    id: 5,
    name: 'Salad',
    image: require('../assets/images_asserts/icons8-takeout-box-96.png'),
  },
  {
    id: 6,
    name: 'Dessert',
    image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
  },
  {
    id: 7,
    name: 'Drinks',
    image: require('../assets/images_asserts/icons8-tropical-drink-96.png'),
  },
];

export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'Soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Papa John\'s',
      description:'Hot and spicy pizzas',
      image: require('../assets/images/dishes/download (1) (1).jpeg'),
      category: 'Fast Food',
      reviews: '4.4k',
      stars: 4,
      type: 'snacks',
      address: '242 Second Street',
      lat:-85.5324269,
      lng:38.2145682,
      dishes: [
        {
          id: 1,
          name: 'Cheesy Garlic Pizza',
          description: 'Cheesy garlic pizza',
          price: 10,
          image: require('../assets/images_asserts/icons8-pizza-96.png'),
        },
        {
          id: 2,
          name: 'Burger',
          description: 'Classic special with chilli flavour',
          price: 12,
          image: require('../assets/images_asserts/icons8-hamburger-96.png'),
        },
        {
          id: 3,
          name: 'soft drink',
          description: 'cool soft special drink',
          price: 15,
          image: require('../assets/images_asserts/icons8-tropical-drink-96.png'),
        },
        {
          id: 4,
          name: 'delicious sweet',
          description: 'Loaded with fresh cake',
          price: 11,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
      ],
    },
    {
      id: 1,
      name: 'Papa John\'s',
      description:'Hot and spicy pizzas',
      image: require('../assets/images/dishes/download (1) (1).jpeg'),
      category: 'Fast Food',
      reviews: '4.4k',
      stars: 4,
      type: 'snacks',
      address: '242 Second Street',
      lat:-85.5324269,
      lng:38.2145682,
      dishes: [
        {
          id: 1,
          name: 'Cheesy Garlic Pizza',
          description: 'Cheesy garlic pizza',
          price: 10,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 2,
          name: 'Margherita Pizza',
          description: 'Classic margherita pizza',
          price: 12,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 3,
          name: 'Pepperoni Pizza',
          description: 'Pepperoni pizza with extra cheese',
          price: 15,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 4,
          name: 'Veggie Pizza',
          description: 'Loaded with fresh vegetables',
          price: 11,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
      ],
    },
    {
      id: 1,
      name: 'Papa John\'s',
      description:'Hot and spicy pizzas',
      image: require('../assets/images/dishes/download (1) (1).jpeg'),
      category: 'Fast Food',
      reviews: '4.4k',
      stars: 4,
      type: 'snacks',
      address: '242 Second Street',
      lat:-85.5324269,
      lng:38.2145682,
      dishes: [
        {
          id: 1,
          name: 'Cheesy Garlic Pizza',
          description: 'Cheesy garlic pizza',
          price: 10,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 2,
          name: 'Margherita Pizza',
          description: 'Classic margherita pizza',
          price: 12,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 3,
          name: 'Pepperoni Pizza',
          description: 'Pepperoni pizza with extra cheese',
          price: 15,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 4,
          name: 'Veggie Pizza',
          description: 'Loaded with fresh vegetables',
          price: 11,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
      ],
    },
    {
      id: 1,
      name: 'Papa John\'s',
      description:'Hot and spicy pizzas',
      image: require('../assets/images/dishes/download (1) (1).jpeg'),
      category: 'Fast Food',
      reviews: '4.4k',
      stars: 4,
      type: 'snacks',
      address: '242 Second Street',
      lat:-85.5324269,
      lng:38.2145682,
      dishes: [
        {
          id: 1,
          name: 'Cheesy Garlic Pizza',
          description: 'Cheesy garlic pizza',
          price: 10,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 2,
          name: 'Margherita Pizza',
          description: 'Classic margherita pizza',
          price: 12,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 3,
          name: 'Pepperoni Pizza',
          description: 'Pepperoni pizza with extra cheese',
          price: 15,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
        {
          id: 4,
          name: 'Veggie Pizza',
          description: 'Loaded with fresh vegetables',
          price: 11,
          image: require('../assets/images_asserts/icons8-cupcake-emoji-96.png'),
        },
      ],
    },
    
  ],
};
