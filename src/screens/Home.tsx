import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {withTheme, Chip} from 'react-native-paper';
import Earning from '../components/Earning';
import ProjectCard from '../components/ProjectCard';
import {ProjectTypes} from '../types';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Entypo';

const Home: React.FC = ({theme}: any) => {
  const {colors} = theme;
  const navigation = useNavigation();
  const {state} = useContext(AuthContext);

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
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View>
        <Earning />
      </View>
      <View style={styles.projectContent}>
        <Text style={styles.desc}>Liste des projets disponible</Text>
        {!state.projects.length ? (
          <View>
            <Text style={styles.noTransac}>Aucun projet disponible</Text>
          </View>
        ) : (
          <FlatList
            data={state.projects}
            renderItem={({item}) => <ProjectCard item={item} />}
            keyExtractor={(item: ProjectTypes) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        )}
      </View>
      <View style={styles.transactions}>
        <View style={styles.transacView}>
          <Text style={styles.desc}>Transactions</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
            <Text style={styles.showAll}>Tout afficher</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trans}>
          {!state.transactions.length ? (
            <View>
              <Text style={styles.noTransac}>Aucune Transaction effectuée</Text>
            </View>
          ) : (
            state.transactions
              .slice(0, 5)
              .sort(
                (a, b) =>
                  Number(new Date(b?.creation_time)) -
                  Number(new Date(a?.creation_time)),
              )
              .map((item: any) => (
                <TouchableOpacity key={item?.id}>
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
                        <Text style={styles.projectName}>
                          {item?.project_name}
                        </Text>
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
                      <Icon
                        style={styles.icon}
                        color="#000"
                        name="chevron-right"
                        size={18}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  trans: {
    padding: 10,
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
  noTransac: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
  },
  desc: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 15,
    marginLeft: 13,
    marginVertical: 10,
  },
  projectContent: {
    marginTop: 18,
    marginHorizontal: 25,
  },
  transactions: {
    marginTop: 5,
    marginHorizontal: 25,
  },
  transacView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showAll: {
    fontWeight: 'bold',
    color: '#9f662f',
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
  },
  creationTime: {
    marginLeft: 10,
    color: 'grey',
  },
});

export default withTheme(Home);
