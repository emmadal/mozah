import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {withTheme, Text} from 'react-native-paper';

const LegalMention: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.tinyLogo}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <Text style={styles.desc}>
          Identification de l’éditeur Le Site et les présentes conditions
          générales sont édités par : MOZAH INVEST, SARL UNIPERSONNELLE au
          capital de 1 000 000 FCFA, Dont le siège social est à Abidjan COCODY
          Riviera Palmeraie 27 BP 032 Abidjan 27.
        </Text>
        <Text style={styles.desc}>N°RCCM du siège : CI-ABJ-2016-B-17004</Text>
        <TouchableOpacity
          style={styles.desc}
          onPress={() => Linking.openURL('mailto:contact@mozahinvest.com')}>
          <Text style={styles.email}>contact@mozahinvest.com</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tinyLogo: {
    height: 100,
    width: 'auto',
    marginVertical: 10,
  },
  desc: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    color: '#000',
  },
  email: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'justify',
  },
});

export default withTheme(LegalMention);
