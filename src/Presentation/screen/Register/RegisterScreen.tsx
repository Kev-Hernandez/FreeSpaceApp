import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button,  } from "react-native";
import { styles } from "./RegisterScreenStyles";
import RegisterViewModel from './ViewModel';

const RegisterScreen = () => {

  const { name, app, apm, date, email, password, onChange, register} = RegisterViewModel();
  
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
        value={app}
        onChangeText={(text) => onChange('app', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido Materno"
        value={apm}
        onChangeText={(text) => onChange('apm', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="fecha"
        value={date}
        onChangeText={(text) => onChange('date', text)}
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

      <Button title="Guardar" onPress={ () => register() } />
    </View>
  );
};

export default RegisterScreen;
