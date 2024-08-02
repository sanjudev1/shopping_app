import { Stack } from 'expo-router';
import { store } from './store/store'
import { Provider } from 'react-redux'
export default function Layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </Provider>
  );
}
