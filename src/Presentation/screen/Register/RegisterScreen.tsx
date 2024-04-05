import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button,  } from "react-native";
import { styles } from "./RegisterScreenStyles";
import RegisterViewModel from './ViewModel';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para manejar la navegación

const RegisterScreen = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación
  
  const { name, apellidoPaterno, apellidoMaterno, password, email, onChange, register} = RegisterViewModel();
  
  const goToSpacesScreen = () => {
    navigation.navigate('SpacesScreen'); // Navega a SpacesScreen al presionar el botón
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla de registro</Text>
      <TextInput
        placeholder="Nombre"
        value={ name }
        onChangeText={(text) => onChange('name', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChangeText={(text) => onChange('apellidoPaterno', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChangeText={(text) => onChange('apellidoMaterno', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={(text) => onChange('email', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => onChange('password', text)}
        secureTextEntry={true}
        style={styles.input}
        secureTextEntry={true}
      />

      <Button title="Guardar" onPress={ () => register() } />
      <Button title="Ir a Spaces" onPress={goToSpacesScreen} /> {/* Agrega este botón para ir a SpacesScreen */}
    </View>
  );
};

export default RegisterScreen;
