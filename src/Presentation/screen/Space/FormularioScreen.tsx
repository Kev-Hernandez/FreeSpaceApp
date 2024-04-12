import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const FormularioScreen = ({ navigation }) => {
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartDateConfirm = (date) => {
    setStartDate(date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleEndDateConfirm = (date) => {
    setEndDate(date);
    hideEndDatePicker();
  };

  const handleConfirmation = () => {
    Alert.alert(
      'Confirmar Reserva',
      `¿Deseas confirmar la reserva con las siguientes fechas?\n\nFecha de inicio: ${startDate.toDateString()}\nFecha de término: ${endDate.toDateString()}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            // Aquí puedes agregar la lógica para guardar las fechas y redirigir a SpaceScreen
            navigation.navigate('Space');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={require('../../../../assets/fondoback.png')} // Ruta de tu imagen de fondo
      style={styles.backgroundImage} // Estilo para el contenedor principal
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={showStartDatePicker} style={styles.datePickerButton}>
          <Text style={styles.datePickerButtonText}>Seleccionar Fecha de Inicio: {startDate.toDateString()}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isStartDatePickerVisible}
          mode="date"
          onConfirm={handleStartDateConfirm}
          onCancel={hideStartDatePicker}
        />
        <TouchableOpacity onPress={showEndDatePicker} style={styles.datePickerButton}>
          <Text style={styles.datePickerButtonText}>Seleccionar Fecha de Término: {endDate.toDateString()}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isEndDatePickerVisible}
          mode="date"
          onConfirm={handleEndDateConfirm}
          onCancel={hideEndDatePicker}
        />
        <TouchableOpacity onPress={handleConfirmation} style={styles.confirmationButton}>
          <Text style={styles.confirmationButtonText}>Confirmar Reserva</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerButton: {
    backgroundColor: '#3498db', //#3498db
    padding: 10,
    marginVertical: 10,
  },
  datePickerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  confirmationButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    marginVertical: 10,
  },
  confirmationButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FormularioScreen;
