import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {withTheme} from 'react-native-paper';
import OfferCard from '../components/OfferCard';
import {subscription} from '../data';

const Offer: React.FC = ({route}: any) => {
  const {project} = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={subscription}
        renderItem={({item}) => <OfferCard item={item} project={project} />}
        keyExtractor={item => item?.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  noTransac: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 20,
  },
});

export default withTheme(Offer);
