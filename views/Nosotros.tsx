
import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

function Nosotros({
    navigation,
}): React.JSX.Element {
 
    const handleVisitInicio = () => {
        //navigation.navigate('Inicio');
        //navigation.goBack();
        navigation.push('Inicio');
    }

  return (
    <View style={styles.contenedor}>
        <Text>
            Inicio
        </Text>
        <Button
            title='Ir a Nosotros'
            onPress={ () => handleVisitInicio() }
        />
    </View>
  );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Nosotros;
