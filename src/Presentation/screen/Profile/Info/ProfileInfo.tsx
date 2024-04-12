import React from 'react';
import { View, Button, Alert, ImageBackground, StyleSheet } from 'react-native';
import ProfileInfoViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootSatckParamList } from '../../../../../App';

interface Props extends StackScreenProps<RootSatckParamList, 'ProfileInfoScreen'> {};

const ProfileInfoScreen = ({ navigation, route }: Props) => {
    const { removeSession } = ProfileInfoViewModel();

    const handleLogout = () => {
        Alert.alert(
            'Cerrar Sesión',
            '¿Estás seguro de que quieres cerrar sesión?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelado'),
                    style: 'cancel',
                },
                { text: 'Sí', onPress: () => logout() },
            ]
        );
    };

    const handleNavigateToSpaces = () => {
        navigation.navigate('Space'); // Reemplaza 'SpacesScreen' con el nombre correcto de tu pantalla de Spaces
    };

    const logout = () => {
        try {
            removeSession();
            navigation.navigate('LoginScreen');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            // Aquí podrías mostrar un mensaje de error al usuario
        }
    };

    return (
        <ImageBackground
            source={require('../../../../../assets/fondoback.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleNavigateToSpaces}
                        title='Ir a Espacios Disponibles'
                        color="#841584"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleLogout}
                        title='Cerrar Sesión'
                        color="#841584"
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        backgroundColor: 'white',
        marginVertical: 10,
        width: '80%', // Ajusta el ancho del contenedor del botón
        borderRadius: 20, // Añade bordes redondeados al contenedor del botón
        overflow: 'hidden', // Oculta cualquier desbordamiento de contenido del botón
    },
});

export default ProfileInfoScreen;
