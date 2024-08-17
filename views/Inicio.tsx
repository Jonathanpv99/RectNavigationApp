
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
 
    const handleVisitNosotros = () => {
        navigation.navigate('Nosotros');
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
