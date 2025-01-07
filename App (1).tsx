import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './src/screens/HomeScreen';
import { lightTheme, darkTheme } from './src/themes';

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = false; // You can implement a proper dark mode toggle later

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

