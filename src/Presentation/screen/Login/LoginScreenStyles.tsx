import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: 'white',
        textDecorationStyle: 'double',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
    
    },
    input: {
        width: 'auto',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginHorizontal: 5,
        
    },
    loginButton: {
        backgroundColor: MyColors.primary,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    registerText: {
        fontSize: 15,
        color: 'white',
    },
    link: {
        color: "cyan", 
        textDecorationLine: 'underline',
    },
    title:{
        paddingTop: 'auto',
        fontWeight:'bold',
        fontSize:30,
        color: 'black',
        textShadowOffset: {width: -1, height: 2}, 
        textShadowRadius: 5,
        textShadowColor: 'white',
        textAlign: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      safeAreaView:{
        flex: 1,
        backgroundColor: 'transparent',
      }
    
});