import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomNav from './src/CustomNav';


export default function App() {
  return (    
        <NavigationContainer>
          <CustomNav />
        </NavigationContainer> 
     
  );
}


