import React from 'react';
import { View, Button, Alert } from 'react-native';
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                onPress={handleNavigateToSpaces}
                title='Ir a Espacios Disponibles'
            />
            <Button
                onPress={handleLogout}
                title='Cerrar Sesión'
            />
        </View>
    );
};

export default ProfileInfoScreen;
