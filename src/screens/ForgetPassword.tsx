import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Text, withTheme, Button, TextInput} from 'react-native-paper';
import Loader from '../components/Loader';
import {sendResetPasswordLink} from '../api';

const ForgetPassword: React.FC = ({navigation, theme}: any) => {
  const [loading, setLoading] = useState(false);
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <Formik
        enableReinitialize
        initialValues={{email: ''}}
        validateOnChange
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('E-mail invalide')
            .required(
              'Entrez votre E-mail pour recevoir le lien de reinitialisation du mot de passe',
            ),
        })}
        onSubmit={async values => {
          setLoading(!loading);
          const req = await sendResetPasswordLink(values.email);
          if (req) {
            setLoading(false);
            values.email = '';
            Alert.alert(
              'Reinitialisation du mot de passe',
              'Le lien de reinitialisation a été envoyé. Veuillez consulter votre Email',
              [
                {
                  text: 'Compris',
                  onPress: () => navigation.popToTop(),
                  style: 'default',
                },
              ],
              {cancelable: false},
            );
          } else {
            setLoading(false);
            Alert.alert(
              'Reinitialisation du mot de passe',
              'Aucun utilisateur ne correspond a cet email',
            );
          }
        }}>
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
              <Text style={styles.appTitle}>
                Entrez votre Email pour recevoir un lien de création de votre
                nouveau mot de passe{' '}
              </Text>
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
            <Button
              labelStyle={[{color: colors.white}, styles.labelStyle]}
              onPress={handleSubmit}
              style={styles.btn}
              buttonColor="#9f662f"
              textColor="white"
              theme={{roundness: 20}}>
              Envoyer
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
    lineHeight: 17,
    fontWeight: 'bold',
  },
});

export default withTheme(ForgetPassword);
