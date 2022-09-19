import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Button, withTheme, Text} from 'react-native-paper';

const Introduction: React.FC = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/5867.jpg')}
        style={styles.tinyLogo}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <Text style={styles.appTitle}>Mozah Invest</Text>
      <Text style={styles.desc}>
        Plateforme d'investissement sur des projets couplés à la finance
        digitale.
      </Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        style={styles.btn}
        buttonColor="#9f662f"
        textColor="white"
        theme={{roundness: 20}}>
        Connexion
      </Button>
      <View style={styles.boxInfo}>
        <Text>Vous n'avez pas de compte ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.textSignup}> Créer un compte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  appTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 27,
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    padding: 4,
    alignSelf: 'center',
    marginVertical: 25,
  },
  labelStyle: {
    fontSize: 18,
  },
  tinyLogo: {
    height: 300,
    width: 'auto',
  },
  desc: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 17,
    marginTop: 15,
    marginBottom: 50,
  },
  boxInfo: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 65 : 35,
  },
  textSignup: {
    fontWeight: 'bold',
    color: '#9f662f',
  },
});

export default withTheme(Introduction);
