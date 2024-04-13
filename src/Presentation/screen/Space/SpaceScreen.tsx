import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, ImageBackground, ScrollView, StyleSheet, Dimensions, Alert, Button, GestureResponderEvent, Image, SafeAreaView, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootSatckParamList } from '../../../../App';
import { PanGestureHandler } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootSatckParamList, "Space"> {};

const SpaceScreen = ({ navigation }: Props) => {

    const handleNavigateToSpaces = () => {
        navigation.navigate('SecondSpace'); // Reemplaza 'SpacesScreen' con el nombre correcto de tu pantalla de Spaces
    };

    // Dimensiones de la ventana
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    // Dimensiones específicas de la imagen
    const imageWidth = 540;
    const imageHeight = 373;

    // Factor de escala para ajustar la imagen al tamaño de la ventana
    const scaleX = windowWidth / imageWidth;
    const scaleY = windowHeight / imageHeight;
    const scale = Math.min(scaleX, scaleY);

    // Dimensiones ajustadas de la imagen
    const adjustedImageWidth = imageWidth * scale;
    const adjustedImageHeight = imageHeight * scale;

    // Estado para el estado de reserva de cada rectángulo (rojo o verde)
    const [reservationState, setReservationState] = useState<{ [key: string]: boolean }>({
        'Rectángulo 1': false,
        'Rectángulo 2': false,
        'Rectángulo 3': false,
        'Rectángulo 4': false,
    });

    // Función para manejar la navegación al presionar cada rectángulo
    const handleRectanglePress = (rectangle: string) => {
        // Mostrar alerta para confirmar la reserva
        Alert.alert(
            'Reservar Zona',
            `¿Deseas reservar el ${rectangle}?`,
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelado'),
                    style: 'cancel',
                },
                {
                    text: 'Sí',
                    onPress: () => {
                        // Cambiar el estado de reserva del rectángulo seleccionado a true
                        console.log('Reserva confirmada para el espacio:', rectangle);
                        setReservationState(prevState => ({
                            ...prevState,
                            [rectangle]: true,
                        }));
                        navigation.navigate('FormularioScreen');
                    },
                },
            ],
            { cancelable: true }
        );
    };

    // Función para manejar la acción de tocar un rectángulo rojo nuevamente
    const handleRedRectanglePress = (rectangle: string) => {
        // Mostrar alerta para confirmar si ya dejó de usar el espacio
        Alert.alert(
            'Dejar de Usar Espacio',
            `¿Has dejado de usar el ${rectangle}?`,
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelado'),
                    style: 'cancel',
                },
                {
                    text: 'Sí',
                    onPress: () => {
                        // Cambiar el estado de reserva del rectángulo seleccionado a false (verde)
                        console.log('Se deja de usar el espacio:', rectangle);
                        setReservationState(prevState => ({
                            ...prevState,
                            [rectangle]: false,
                        }));
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <ImageBackground
                source={require('../../../../assets/fondoback.png')} // Ruta de la imagen de fondo
                style={styles.backgroundImage} // Estilos para el contenedor principal
                resizeMode="cover" // Ajusta la imagen para que cubra el contenedor
            >
        <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                    maximumZoomScale={2} // Establece el máximo zoom permitido
                    minimumZoomScale={1} // Establece el mínimo zoom permitido
                    zoomScale={1} // Establece el nivel de zoom inicial
                    centerContent // Centra el contenido
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    bouncesZoom // Permite el rebote al hacer zoom
                >
                    <Text style={styles.title}>ESTAS EN EL PRIMER PISO</Text>
                    <Text style={styles.title}>TOCA EL ESPACIO QUE DESEAS USAR</Text>
                    <PanGestureHandler>
                        <ImageBackground
                            source={require('../../../../assets/aulas.png')}
                            style={[styles.imageBackground, { width: adjustedImageWidth, height: adjustedImageHeight }]}
                            resizeMode="cover"
                        >
                            {/* Zona clickeable para el rectángulo 1 */}
                            <TouchableOpacity
                                onPress={() => reservationState['Rectángulo 1'] ? handleRedRectanglePress('Rectángulo 1') : handleRectanglePress('Rectángulo 1')}
                                style={[
                                    styles.rectangleContainer,
                                    { 
                                        left: 0, 
                                        top: 0, 
                                        width: adjustedImageWidth / 2, 
                                        height: adjustedImageHeight / 2, 
                                        backgroundColor: reservationState['Rectángulo 1'] ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)' 
                                    },
                                ]}
                            />
                            {/* Zona clickeable para el rectángulo 2 */}
                            <TouchableOpacity
                                onPress={() => reservationState['Rectángulo 2'] ? handleRedRectanglePress('Rectángulo 2') : handleRectanglePress('Rectángulo 2')}
                                style={[
                                    styles.rectangleContainer,
                                    { 
                                        left: adjustedImageWidth / 2, 
                                        top: 0, 
                                        width: adjustedImageWidth / 2, 
                                        height: adjustedImageHeight / 2, 
                                        backgroundColor: reservationState['Rectángulo 2'] ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)' 
                                    },
                                ]}
                            />
                            {/* Zona clickeable para el rectángulo 3 */}
                            <TouchableOpacity
                                onPress={() => reservationState['Rectángulo 3'] ? handleRedRectanglePress('Rectángulo 3') : handleRectanglePress('Rectángulo 3')}
                                style={[
                                    styles.rectangleContainer,
                                    { 
                                        left: 0, 
                                        top: adjustedImageHeight / 2, 
                                        width: adjustedImageWidth / 2, 
                                        height: adjustedImageHeight / 2, 
                                        backgroundColor: reservationState['Rectángulo 3'] ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)' 
                                    },
                                ]}
                            />
                            {/* Zona clickeable para el rectángulo 4 */}
                            <TouchableOpacity
                                onPress={() => reservationState['Rectángulo 4'] ? handleRedRectanglePress('Rectángulo 4') : handleRectanglePress('Rectángulo 4')}
                                style={[
                                    styles.rectangleContainer,
                                    { 
                                        left: adjustedImageWidth / 2, 
                                        top: adjustedImageHeight / 2, 
                                        width: adjustedImageWidth / 2, 
                                        height: adjustedImageHeight / 2, 
                                        backgroundColor: reservationState['Rectángulo 4'] ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)' 
                                    },
                                ]}
                            />
                        </ImageBackground>
                    </PanGestureHandler>
                </ScrollView>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={handleNavigateToSpaces}
                    title='Ir al Segundo Piso'
                    color="#841584"
                />
            </View>
        </SafeAreaView>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangleContainer: {
        position: 'absolute',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 80, // Ajusta la posición vertical del contenedor del botón
        alignSelf: 'center', // Alinea el contenedor de botones al centro horizontalmente
        backgroundColor: 'white',
        marginVertical: 20,
        width: '80%', // Ajusta el ancho del contenedor del botón
        borderRadius: 20, // Añade bordes redondeados al contenedor del botón
        overflow: 'hidden', // Oculta cualquier desbordamiento de contenido del botón
    },
    button: {
        marginVertical: 10, // Ajusta el espacio vertical entre botones
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color: 'white',
        textShadowRadius: 5,
        textShadowColor: 'black',
        textAlign: 'center',
        paddingBottom:10,
    },
});

export default SpaceScreen;
