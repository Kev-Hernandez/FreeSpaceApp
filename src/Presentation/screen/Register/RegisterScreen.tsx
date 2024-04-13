import React, { useState } from "react";
import { View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import RegisterViewModel from './ViewModel';
import { NavigationContainer } from "@react-navigation/native";

const RegisterScreen = () => {

  const { name, apellidoPaterno, apellidoMaterno, password, email, onChange, register} = RegisterViewModel();
  
  return (
    <ImageBackground
        source={require('../../../../assets/fondoback.png')} // Ruta de tu imagen de fondo
        style={styles.backgroundImage} // Estilo para el contenedor principal
      >
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
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
          />

          <Button title="Guardar" color={'lightblue'} onPress={ () => register() } />
        </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default RegisterScreen;
