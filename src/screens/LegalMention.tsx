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
          générales sont édités par : MOZAH INVEST, Entrepreneur Individuel au
          capital de 1 000 Euros, Dont le siège social est 3 rue jean Sartre
          91860 Epinay sous Sénart Siren 850299546 Siret 85029954600018
          Entrepreneur individuel.
        </Text>
        <Text style={styles.desc}>NACE : 70.22Z</Text>
        <Text style={styles.desc}>Immatriculation : 2019-04-22</Text>
        <Text style={styles.desc}>En activité depuis 2019-04-22</Text>
        <Text style={styles.desc}>Dirigeant : M Kan Mermoz Ouffouet.</Text>
        <Text style={styles.desc}>Numéro de téléphone :</Text>
        <Text style={styles.desc}>Numéro de TVA intracommunautaire :</Text>
        <TouchableOpacity
          style={styles.desc}
          onPress={() => Linking.openURL('mailto:contact@mozahinvest.com')}>
          <Text style={styles.email}>contact@mozahinvest.com</Text>
        </TouchableOpacity>
        <Text style={styles.desc}>
          Directeur de la publication Le Directeur de la publication du Site est
          monsieur Kan Mermoz OUFFOUET.
        </Text>
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
    height: 150,
    width: 'auto',
  },
  desc: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    color: '#000',
    textAlign: 'justify',
  },
  email: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    textAlign: 'justify',
  },
});

export default withTheme(LegalMention);
