import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyBottomTabs from './app/navigation/BottomTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
        <NavigationContainer>
          <MyBottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
