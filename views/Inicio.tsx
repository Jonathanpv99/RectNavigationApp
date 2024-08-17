
import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

function Inicio({
    navigation,
}): React.JSX.Element {
 
    const info = {
        clienteId: 20,
        name: 'Jonathan',
        totalPagar: 500,
    };

    const handleVisitNosotros = () => {
        navigation.navigate('Nosotros', info);
    }

  return (
    <View style={styles.contenedor}>
        <Text>
            Inicio
        </Text>
        <Button
            title='Ir a Nosotros'
            onPress={ () => handleVisitNosotros() }
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

export default Inicio;
