import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {withTheme, Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';

const TransactionCard = ({item, theme}: any) => {
  const {colors} = theme;
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
    <View style={styles.container}>
      <TouchableOpacity
        key={item?.id}
        style={styles.trans}
        onPress={() =>
          navigation.navigate('TransactionDetail', {
            transaction: item,
          })
        }>
        <Text style={styles.creationTime}>
          {formatDate(item?.creation_time)}
        </Text>
        <View style={styles.detailV1}>
          <View style={styles.detailV2}>
            <Image
              style={styles.tinyLogo}
              source={
                item?.payment_method === 'Paypal'
                  ? require('../assets/images/paypal.png')
                  : require('../assets/images/orangemoney.png')
              }
            />
            <View style={styles.subDetail}>
              <Text style={styles.projectName}>{item?.project_name}</Text>
              <Chip selectedColor={colors.danger} icon="cash">
                Paiement
              </Chip>
              <Text style={styles.time}>
                {item?.creation_time.substring(11, 16)}
              </Text>
            </View>
          </View>
          <View style={styles.subDetail2}>
            <Text style={[styles.amount, {color: colors.danger}]}>
              {item?.amount} €
            </Text>
            <Icon style={styles.icon} name="chevron-right" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trans: {
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  tinyLogo: {
    height: 40,
    width: 40,
  },
  detailV1: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailV2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  projectName: {
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  time: {
    color: 'grey',
    marginVertical: 10,
  },
  subDetail: {
    marginLeft: 15,
  },
  subDetail2: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  amount: {
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 9,
    color: '#000',
  },
  creationTime: {
    marginLeft: 10,
    color: 'grey',
  },
});

export default withTheme(TransactionCard);
