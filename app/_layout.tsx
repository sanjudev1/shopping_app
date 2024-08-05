import { router, Stack } from 'expo-router';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { useEffect } from 'react';

export default function Layout() {
  useEffect(()=>{
    setTimeout(()=>{
     router.replace('/home')
    },100)
  })
  return (
       <Provider store={store}>
       <Stack>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
       </Stack>
       </Provider>
  );
}






