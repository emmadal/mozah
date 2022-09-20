import React, {Fragment} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {withTheme, Button, Text, Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const TransactionDetails: React.FC = ({route}: any) => {
  const {transaction} = route.params;
  const navigation = useNavigation();

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date: string) {
    return [
      padTo2Digits(new Date(date).getDate()),
      padTo2Digits(new Date(date).getMonth() + 1),
      new Date(date).getFullYear(),
    ].join('/');
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineLarge" style={styles.title}>
            Projet {transaction?.project_name}
          </Text>
          <Text variant="bodyMedium">Investissement sur projet</Text>
          <Text variant="headlineLarge" style={styles.price}>
            {transaction?.amount} €
          </Text>
        </View>
        <Divider bold={true} />
        <Text variant="bodyLarge" style={styles.details}>
          Détails de la transaction
        </Text>
        <View style={styles.block}>
          <Text variant="bodyLarge" style={styles.subTitle}>
            Nom complet
          </Text>
          <Text variant="bodyLarge" style={styles.subTitleResponse}>
            {transaction?.fullName}
          </Text>
        </View>
        <View style={styles.block}>
          <Text variant="bodyLarge" style={styles.subTitle}>
            Date de la transaction
          </Text>
          <Text variant="bodyLarge" style={styles.subTitleResponse}>
            {formatDate(transaction?.creation_time)}
          </Text>
        </View>
        <View style={styles.block}>
          <Text variant="bodyLarge" style={styles.subTitle}>
            Transaction ID
          </Text>
          <Text variant="bodyLarge" style={styles.subTitleResponse}>
            {transaction?.id?.substring(0, 13)}
          </Text>
        </View>
        <View style={styles.block}>
          <Text variant="bodyLarge" style={styles.subTitle}>
            Methode de paiement
          </Text>
          <Text variant="bodyLarge" style={styles.subTitleResponse}>
            {transaction?.payment_method}
          </Text>
        </View>
        <View style={styles.block}>
          <Text variant="bodyLarge" style={styles.subTitle}>
            Destinataire
          </Text>
          <Text variant="bodyLarge" style={styles.subTitleResponse}>
            Mozah Invest
          </Text>
        </View>
        <Button
          icon="arrow-left"
          onPress={() => navigation.goBack()}
          style={styles.btn}
          buttonColor="#9f662f"
          textColor="white"
          theme={{roundness: 20}}>
          Retour
        </Button>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#9f662f',
  },
  details: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subTitle: {
    color: 'grey',
  },
  subTitleResponse: {
    fontWeight: 'bold',
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    padding: 4,
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default withTheme(TransactionDetails);
