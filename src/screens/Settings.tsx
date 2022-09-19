import React, {useContext, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import {Title, Divider, Text, withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {AuthContext} from '../context/AuthContext';
import Loader from '../components/Loader';
import {logOutUser} from '../api';
const Settings: React.FC = ({theme, navigation}: any) => {
  const {colors} = theme;
  const {dispatch} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(!loading);
    const isSignout = await logOutUser();
    if (isSignout) {
      dispatch.signOut();
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('CGU')}>
        <Title style={styles.titleOptions}>
          <Icon name="book" size={18} color={colors.placeholder} />
          {''} Conditions Génerale
        </Title>
        <Icon
          color={colors.primary}
          style={styles.iconOptions}
          name="chevron-right"
          size={17}
        />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate('LegalMention')}>
        <Title style={styles.titleOptions}>
          <Icon name="book-open" size={18} color={colors.placeholder} />
          {''} Mentions Légales
        </Title>
        <Icon
          color={colors.primary}
          style={styles.iconOptions}
          name="chevron-right"
          size={17}
        />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.optionContainer} onPress={handleLogout}>
        <Title style={styles.titleOptions}>
          <Icon name="user-x" size={18} color={colors.placeholder} />{' '}
          Déconnexion
        </Title>
        <Icon name="power" size={18} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.viewFooter}>
        <Text style={{color: colors.primary}}>
          Mozah Invest - {new Date().getFullYear()}
        </Text>
        <Text>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 13,
  },
  titleOptions: {
    fontSize: 18,
  },
  iconOptions: {
    alignSelf: 'center',
    marginTop: 5,
  },
  viewFooter: {
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height / 3,
  },
});

export default withTheme(Settings);
