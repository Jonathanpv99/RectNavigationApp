
import React from 'react';
//react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Inicio'
      >
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              title: 'Componente Principal'
            }}
          />
          <Stack.Screen
            name='Nosotros'
            component={Nosotros}
            options={ ({route}) => ({
              title: route.params.name,
            })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
