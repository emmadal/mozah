import React, {useContext} from 'react';
import {StyleSheet, View, Dimensions, ScrollView, Platform} from 'react-native';
import {withTheme, Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../context/AuthContext';

const Earnings = () => {
  const {state} = useContext(AuthContext);

  const computeToken = (tokenArr: any) => {
    let token = 0;
    for (const i of tokenArr) {
      token += i.token;
    }
    return token;
  };

  const computeIncome = (incomeArr: any) => {
    let p = 0;
    for (const i of incomeArr) {
      p += i.income;
    }
    return p;
  };

  const computeInvestment = (investmentArr: any) => {
    let sum = 0;
    for (const i of investmentArr) {
      sum += Number(i.amount_invested);
    }
    return sum;
  };

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title style={styles.title}>Gain obtenu(€)</Title>
          <Paragraph style={styles.amount}>
            {computeIncome(state.earning)} €
          </Paragraph>
        </View>
        <Icon name="creditcard" size={40} color="#ffffff" />
      </View>
      <View style={styles.container}>
        <View>
          <Title style={styles.title}>Nombre de Jeton obtenu</Title>
          <Paragraph style={styles.amount}>
            {computeToken(state.earning)}
          </Paragraph>
        </View>
        <Icon name="API" size={40} color="#ffffff" />
      </View>
      <View style={styles.container}>
        <View>
          <Title style={styles.title}>Total des investisements (€)</Title>
          <Paragraph style={styles.amount}>
            {computeInvestment(state.earning)} €
          </Paragraph>
        </View>
        <Icon name="calculator" size={40} color="#ffffff" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.2,
    height: 120,
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: Platform.OS === 'ios' ? 45 : 35,
    padding: 18,
    backgroundColor: '#9f662f',
  },
  title: {
    color: '#ffffff',
    marginBottom: 0,
    fontSize: 14,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default withTheme(Earnings);
