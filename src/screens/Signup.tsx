import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions, Alert, Image} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Text, withTheme, Button, TextInput} from 'react-native-paper';
import Loader from '../components/Loader';
import {login, getProfile, registerUser} from '../api';
import {AuthContext} from '../context/AuthContext';
import {SignupTypes} from '../types';

const Signup: React.FC = ({theme}: any) => {
  const [loading, setLoading] = useState(false);
  const [isView, setIsView] = useState(true);
  const {dispatch} = useContext(AuthContext);
  const {colors} = theme;

  const handleSignup = async (values: SignupTypes) => {
    try {
      setLoading(!loading);
      const userCreated = await registerUser(values);
      if (userCreated) {
        const logIn = await login({
          email: values.email,
          password: values.password,
        });
        const response = await getProfile(logIn?.uid);
        if (response) {
          dispatch.fetchProfile(response);
          setLoading(false);
        }
      }
    } catch (error: any) {
      setLoading(false);
      Alert.alert(error.message);
    }
  };
  const handleViewPassword = () => setIsView(!isView);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
        }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .matches(/(.|\s)*\S(.|\s)*/, 'Champ vide non autorisé')
            .min(8, 'Votre Nom doit contenir au moins 5 caractères')
            .required('Entrez votre Nom complet'),
          email: yup
            .string()
            .matches(/(.|\s)*\S(.|\s)*/, 'Champ vide non autorisé')
            .email('E-mail invalide')
            .required('Entrez votre E-mail'),
          password: yup
            .string()
            .matches(/(.|\s)*\S(.|\s)*/, 'Champ vide non autorisé')
            .min(8, 'Mot de passe doit être au moins de 8 caractères')
            .required('Entrez votre mot de passe'),
        })}
        onSubmit={values => handleSignup(values)}>
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
            <Text style={styles.appTitle}>
              Création de compte sur Mozah Invest
            </Text>
            <View style={styles.input}>
              <TextInput
                mode="outlined"
                autoCapitalize="none"
                value={values.name}
                label="Nom & Prémoms"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                right={
                  <TextInput.Icon name="human-male" color={colors.primary} />
                }
              />
              {errors.name && touched.name && (
                <Text style={styles.labelError}>{errors.name}</Text>
              )}
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
                right={<TextInput.Icon name="email" color={colors.primary} />}
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
                    name={isView ? 'eye-off' : 'eye'}
                    color={colors.primary}
                    onPress={handleViewPassword}
                  />
                }
              />
              {errors.password && touched.password && (
                <Text style={styles.labelError}>{errors.password}</Text>
              )}
            </View>
            <Button
              buttonColor="#9f662f"
              textColor="white"
              onPress={handleSubmit}
              style={styles.btn}
              theme={{roundness: 20}}>
              Creation de compte
            </Button>
          </React.Fragment>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  appTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
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
    color: 'red',
    fontWeight: 'bold',
  },
});

export default withTheme(Signup);
