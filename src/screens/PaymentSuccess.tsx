import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Dimensions} from 'react-native';
import {withTheme, Button, Text} from 'react-native-paper';
import theme from '../themes';

const PaymentSuccess: React.FC = ({navigation}: any) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name="check-circle"
        color={theme.colors.success}
        size={100}
        style={styles.icon}
      />
      <Text style={styles.desc}>Votre paiement a été effectué avec succès</Text>
      <Button
        onPress={() => navigation.popToTop()}
        style={styles.btn}
        buttonColor={theme.colors.success}
        textColor={theme.colors.light}
        theme={{roundness: 2}}>
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
    marginTop: 20,
  },
  desc: {
    color: theme.colors.dark,
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
