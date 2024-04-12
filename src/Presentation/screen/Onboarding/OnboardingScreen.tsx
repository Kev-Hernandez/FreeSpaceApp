import * as React from 'react';
import { View, StyleSheet, Text, Button,Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

interface OnboardingScreenProps {}

const OnboardingScreen: React.FC<OnboardingScreenProps> = () => {
  const navigation = useNavigation();

  const handleFinishOnboarding = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#a7f3d8',
            image: <Image source={require('../../../../assets/foundpng.png')}
            style={{width:300, height:300}}
            />,
            title: 'Encuentra',
            subtitle: 'Te Ayudamos a Buscar Espacios',
          },
          {
            backgroundColor: '#fef3c7',
            image: <Image source={require('../../../../assets/administratorpng.png')}
            style={{width:400, height:300}}
            />,
            title: 'Administra',
            subtitle: 'Maneja Tus Propios Lugares ',
          },
          {
            backgroundColor: '#ff8ff8',
            image: <Image source={require('../../../../assets/reservepng.png')}
            style={{width:400, height:300}}
            />,
            title: 'Reserva',
            subtitle: 'Un Lugar Para Trabajar o Reunirte',
          },
        ]}
        onDone={handleFinishOnboarding}
        onSkip={handleFinishOnboarding}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
