import { StatusBar } from 'expo-status-bar';

import './global.css';
import { View } from 'react-native';
import List from 'components/List';
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 justify-center bg-slate-100'>
         <List></List>
      </SafeAreaView>
     
    </SafeAreaProvider>
  );
}
