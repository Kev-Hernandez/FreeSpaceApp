import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileInfoViewModel from '../screen/Profile/Info/ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootSatckParamList } from '../../../App';

// Define las pantallas para cada pestaña
const Tab = createBottomTabNavigator();

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
            <SafeAreaView style={styles.safeAreaView}>
                <Tab.Navigator>
                    <Tab.Screen name="Spaces" component={SpacesScreen} />
                    <Tab.Screen name="Logout" component={LogoutScreen} />
                </Tab.Navigator>
            </SafeAreaView>
        </ImageBackground>
    );
};

const SpacesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Esta es la pantalla de Espacios Disponibles</Text>
        </View>
    );
};

const LogoutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Esta es la pantalla de Cerrar Sesión</Text>
        </View>
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
    safeAreaView: {
        flex: 1,
    },
});

export default ProfileInfoScreen;
