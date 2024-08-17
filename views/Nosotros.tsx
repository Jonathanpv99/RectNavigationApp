
import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

function Nosotros({
    navigation,
    route,
}): React.JSX.Element {
 
    console.log('route', route);
    const { clienteId, totalPagar } = route.params;
    const handleVisitInicio = () => {
        //navigation.navigate('Inicio');
        //navigation.goBack();
        navigation.push('Inicio');
    }

  return (
    <View style={styles.contenedor}>
        <Text>
            ClienteId: {clienteId}
        </Text>
        <Text>
            Total $: {totalPagar}
        </Text>
        <Button
            title='Ir a Inicio'
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
