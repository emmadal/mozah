import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Text, withTheme, Button, TextInput} from 'react-native-paper';
import Loader from '../components/Loader';
import {login, getProfile} from '../api';
import {AuthContext} from '../context/AuthContext';
import {LoginTypes} from '../types';
import theme from '../themes';

const Login: React.FC = ({navigation}: any) => {
  const [loading, setLoading] = useState(false);
  const [isView, setIsView] = useState(true);
  const {dispatch} = useContext(AuthContext);

  const handleLogin = async (values: LoginTypes) => {
    try {
      setLoading(!loading);
      const req = await login(values);
      if (req) {
        // await Storage.setItem('mozah_user_uid', req.uid);
        const user = await getProfile(req.uid);
        if (user) {
          dispatch.fetchProfile(user);
          setLoading(false);
        }
      }
    } catch (error: any) {
      setLoading(false);
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Utilisateur non trouvé!');
      }
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Le mot de passe ou Email est invalide');
      }
    }
  };
  const handleViewPassword = () => setIsView(!isView);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('E-mail invalide')
            .required('Entrez votre E-mail'),
          password: yup
            .string()
            .min(8, 'Mot de passe doit être au moins de 8 caractères')
            .required('Entrez votre mot de passe'),
        })}
        onSubmit={values => handleLogin(values)}>
        {({
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          touched,
          errors,
        }) => (
          <React.Fragment>
            <Loader loading={loading} />
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.tinyLogo}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <View>
              <Text style={styles.appTitle}>Se connecter à Mozah Invest</Text>
            </View>
            <View style={styles.input}>
              <TextInput
                mode="outlined"
                autoCapitalize="none"
                keyboardType="email-address"
                value={values.email}
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                right={
                  <TextInput.Icon icon="email" iconColor={theme.colors.dark} />
                }
              />
              {errors.email && touched.email && (
                <Text style={styles.labelError}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.input}>
              <TextInput
                mode="outlined"
                secureTextEntry={isView}
                autoCapitalize="none"
                value={values.password}
                label="Mot de passe"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                right={
                  <TextInput.Icon
                    icon={isView ? 'eye-off' : 'eye'}
                    iconColor={theme.colors.dark}
                    onPress={handleViewPassword}
                  />
                }
              />
              {errors.password && touched.password && (
                <Text style={styles.labelError}>{errors.password}</Text>
              )}
            </View>
            <Button
              onPress={handleSubmit}
              style={styles.btn}
              buttonColor={theme.colors.primary}
              textColor={theme.colors.light}
              theme={{roundness: 2}}>
              Connexion
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.textSignup}> Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    justifyContent: 'center',
  },
  appTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
  tinyLogo: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    padding: 4,
    alignSelf: 'center',
    marginTop: 35,
  },
  input: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  labelStyle: {
    fontSize: 18,
  },
  labelError: {
    marginTop: 4,
    fontSize: 13,
    color: theme.colors.error,
    fontWeight: 'bold',
  },
  textSignup: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 50,
  },
});

export default withTheme(Login);
