/*import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from './SpacesScreenStyles';
import ImageMapper from 'react-img-mapper';
import space from './space.json';
import { TouchableOpacity } from 'react-native-gesture-handler'; // Importa TouchableOpacity para manejar clics en las áreas
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para manejar la navegación

const exampleImage = require('../../../../assets/cuarto.jpg');

interface SpacesScreenProps {}

const SpacesScreen = (props: SpacesScreenProps) => {
    const [selectedArea, setSelectedArea] = React.useState<string | null>(null); // Estado para almacenar el área seleccionada
    const navigation = useNavigation(); // Obtiene el objeto de navegación

    // Función para manejar el evento onPress de las áreas
    const handleAreaPress = (areaId: string) => {
        setSelectedArea(areaId);
    };

    // Mapea las áreas con un componente TouchableOpacity para hacerlas clickeables
    const mappedAreas = space.map((area: any) => ({
        ...area,
        onPress: () => handleAreaPress(area.id), // Llama a la función handleAreaPress al hacer clic
    }));

    const MAP = {
        name: 'my-map',
        areas: mappedAreas,
    };

    const goToLoginScreen = () => {
        navigation.navigate('LoginScreen'); // Navega a LoginScreen al presionar el botón
    };

    return (
        <View style={styles.container}>
            <Text>SpacesScreen</Text>
            <ImageMapper src={exampleImage} map={MAP} />
            {selectedArea && ( // Muestra información detallada cuando se selecciona un área
                <View style={styles.areaDetailsContainer}>
                    <Text style={styles.areaDetailsText}>Detalles del área seleccionada: {selectedArea}</Text>
                </View>
            )}
            <TouchableOpacity onPress={goToLoginScreen}>
                <Text>Volver a Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SpacesScreen;
*/

import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking, Image, StatusBar, ImageBackground  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Login/LoginScreenStyles';
import { MyColors } from '../../theme/AppTheme';
import LoginViewModel from '../Login/ViewModel';
import { StackNavigationProp,StackScreenProps } from '@react-navigation/stack';
import { RootSatckParamList } from '../../../../App';

import ImageMapper from 'react-img-mapper';
import space from './space.json';


interface Props extends StackScreenProps<RootSatckParamList, "LoginScreen">{};

const SpacesScreen = ({navigation, route}: Props) => {

    const {email, password, errorMessage, onChange, login, user} = LoginViewModel();

    useEffect(() => {
        if(user?.session_token !== null && user?.id !== undefined){
            navigation.navigate('ProfileInfoScreen');
        }
        }, [user]);
    
    // Función para manejar el evento onPress de las áreas
    const handleAreaPress = (areaId: string) => {
        setSelectedArea(areaId);
    };

    // Mapea las áreas con un componente TouchableOpacity para hacerlas clickeables
    const mappedAreas = space.map((area: any) => ({
        ...area,
        onPress: () => handleAreaPress(area.id), // Llama a la función handleAreaPress al hacer clic
    }));

    const MAP = {
        name: 'my-map',
        areas: mappedAreas,
    };

    return (
        <View style={styles.container}> 
        <Text style={styles.title}>SELECCION DE ESPACIO</Text>
        <View>
            <Image source={require('../../../../assets/cuarto.jpg')}
            style={{width:300, height:200, marginBottom:20}}
            
            />
            <ImageMapper src={require('../../../../assets/cuarto.jpg')}  map={MAP}>
                
            </ImageMapper>
        </View>
            <View style={styles.buttonContainer}>
                {/* Botón de inicio de sesión */}
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={ () => login()}
                >
                    <Text style={styles.buttonText}>Detalles de Area</Text>
                </TouchableOpacity>
                <View style={styles.registerContainer}>
                {/* Texto de registro */}
                <Text style={styles.registerText}>REGRESAR AL LOGIN </Text>
                {/* Enlace de registro */}
                <Text style={styles.link} onPress={()=> navigation.navigate('LoginScreen') } >Login</Text>
            </View>
            </View>
        </View>
    )
}



export default SpacesScreen;

function setSelectedArea(areaId: string) {
    throw new Error('Function not implemented.');
}

