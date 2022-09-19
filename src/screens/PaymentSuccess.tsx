import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Dimensions} from 'react-native';
import {withTheme, Button, Text} from 'react-native-paper';

const PaymentSuccess: React.FC = ({theme}: any) => {
  const {colors} = theme;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon name="check-circle" color="green" size={100} style={styles.icon} />
      <Text style={styles.desc}>Votre paiement a été effectué avec succès</Text>
      <Button
        labelStyle={{color: colors.white}}
        onPress={() => navigation.navigate('Home')}
        style={styles.btn}
        mode="contained"
        theme={{roundness: 10}}>
        Terminer
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'center',
    backgroundColor: 'green',
    marginTop: 20,
  },
  desc: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default withTheme(PaymentSuccess);
