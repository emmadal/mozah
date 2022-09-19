import React, {useEffect, useContext, useCallback} from 'react';
import {View, StyleSheet, FlatList, Platform, Text} from 'react-native';
import {withTheme} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';
import {getTransactions} from '../api';
import TransactionCard from '../components/TransactionCard';

const Transactions: React.FC = () => {
  const {state, dispatch} = useContext(AuthContext);

  const getUserTransactions = useCallback(async () => {
    const response = await getTransactions(state?.user.uid);
    if (response.length) {
      dispatch.fetchTransactions(response);
    }
  }, [dispatch, state?.user.uid]);

  useEffect(() => {
    getUserTransactions();
  }, [getUserTransactions]);

  return (
    <View style={styles.container}>
      {!state.transactions.length ? (
        <View>
          <Text style={styles.noTransac}>Aucune Transaction effectuée</Text>
        </View>
      ) : (
        <FlatList
          data={state.transactions.sort(
            (a, b) =>
              Number(new Date(b?.creation_time)) -
              Number(new Date(a?.creation_time)),
          )}
          renderItem={({item}) => <TransactionCard item={item} />}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 10 : 15,
  },
  noTransac: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 20,
    color: '#000',
  },
});

export default withTheme(Transactions);
