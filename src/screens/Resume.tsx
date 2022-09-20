import React, {useState, Fragment, useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import {withTheme, Divider, TextInput, Button} from 'react-native-paper';
import {requestOneTimePayment} from 'react-native-paypal';
import {Formik} from 'formik';
import Loader from '../components/Loader';
import {
  getPaypalAuthToken,
  addTransaction,
  affiliateProject,
  getTransactions,
  getRelatedProject,
} from '../api';
import {AuthContext} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const Resume: React.FC = ({route}: any) => {
  const {project, subscription, payment_method} = route.params;
  const {state, dispatch} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePay = async (values: {amount: any}) => {
    if (payment_method?.name === 'Paypal') {
      if (state.user.metamask_acc) {
        try {
          setLoading(!loading);
          const token = await getPaypalAuthToken();
          if (token?.access_token) {
            const req = await requestOneTimePayment(
              'sandbox_rzcxyvvp_g9npgzxsyqxy42kd',
              {
                amount: String(values.amount),
                currency: 'EUR',
                localeCode: 'fr_FR',
                shippingAddressRequired: false,
                userAction: 'commit', // display 'Pay Now' on the PayPal review page
                // one of 'authorize', 'sale', 'order'. defaults to 'authorize'. see details here: https://developer.paypal.com/docs/api/payments/v1/#payment-create-request-body
                intent: 'authorize',
              },
            );
            if (req?.payerId) {
              const obj = {
                id: req?.nonce,
                amount: parseFloat(String(values.amount)).toFixed(2),
                fullName: state.user.fullName,
                payment_status: 'Payé',
                currency: 'EUR',
                payment_method: payment_method?.name,
                project_name: project?.name,
                creation_time: new Date().toISOString(),
                uid: state.user.uid,
              };
              // attribute transaction to user
              await addTransaction(obj);

              if (values.amount >= 100 && values.amount <= 750) {
                // compute user income
                const profit = parseFloat(
                  String((values.amount * 20) / 100),
                ).toFixed(2);
                // create an object for user related project
                const relatedProject = {
                  projectId: project?.id,
                  project_name: project?.name,
                  project_budget: project?.budget,
                  token: 100,
                  income: parseFloat(profit),
                  amount_invested: Number(values.amount),
                };
                // attribute project to investor
                const res = await affiliateProject(state.user, relatedProject);
                if (res) {
                  const [transactions, earning] = await Promise.all([
                    getTransactions(state.user.uid),
                    getRelatedProject(state.user.uid),
                  ]);
                  dispatch.fetchTransactions(transactions);
                  dispatch.fetchEarning(earning);
                  values.amount = 0;
                  setLoading(false);
                  navigation.navigate('PaymentSuccess');
                }
              }
              if (values.amount >= 800 && values.amount <= 2500) {
                // compute user income
                const profit = parseFloat(
                  String((values.amount * 25) / 100),
                ).toFixed(2);
                // create an object for user related project
                const relatedProject = {
                  projectId: project?.id,
                  project_name: project?.name,
                  project_budget: project?.budget,
                  token: 300,
                  income: parseFloat(profit),
                  amount_invested: Number(values.amount),
                };
                // attribute project to investor
                const res = await affiliateProject(state.user, relatedProject);
                if (res) {
                  const [transactions, earning] = await Promise.all([
                    getTransactions(state.user.uid),
                    getRelatedProject(state.user.uid),
                  ]);
                  dispatch.fetchTransactions(transactions);
                  dispatch.fetchEarning(earning);
                  values.amount = 0;
                  setLoading(false);
                  navigation.navigate('PaymentSuccess');
                }
              }
              if (values.amount >= 2750 && values.amount <= 10000) {
                // compute user income
                const profit = parseFloat(
                  String((values.amount * 30) / 100),
                ).toFixed(2);
                // create an object for user related project
                const relatedProject = {
                  projectId: project?.id,
                  project_name: project?.name,
                  project_budget: project?.budget,
                  token: 500,
                  income: parseFloat(profit),
                  amount_invested: Number(values.amount),
                };
                // attribute project to investor
                const res = await affiliateProject(state.user, relatedProject);
                if (res) {
                  const [transactions, earning] = await Promise.all([
                    getTransactions(state.user.uid),
                    getRelatedProject(state.user.uid),
                  ]);
                  dispatch.fetchTransactions(transactions);
                  dispatch.fetchEarning(earning);
                  values.amount = 0;
                  setLoading(false);
                  navigation.navigate('PaymentSuccess');
                }
              }
            }
          } else {
            setLoading(false);
            Alert.alert("Une erreur de connexion s'est produite");
          }
        } catch (error) {
          setLoading(false);
          Alert.alert("L'opération a été annulée");
        }
      } else {
        Alert.alert(
          'Vous ne disposez pas de compte metamask. Veuillez mettre a jour votre profile',
        );
      }
    }
    if (payment_method?.name === 'Orange Money') {
      console.log(values);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.title}>Nom du projet</Text>
        <Text style={styles.desc}>{project?.name}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.title}>Budget du projet</Text>
        <Text style={styles.desc}>{project?.budget} €</Text>
        <Divider style={styles.divider} />
        <Text style={styles.title}>Offre selectionnée</Text>
        <Text style={styles.desc}>{subscription?.title}</Text>
        <Divider style={styles.divider} />
        <Text style={styles.title}>Methode de paiement</Text>
        <Text style={styles.desc}>{payment_method?.name}</Text>
      </View>
      <View style={styles.card}>
        <Formik
          validateOnMount={true}
          initialValues={{
            amount: 0,
          }}
          validate={values => {
            const errors = {amount: ''};
            if (subscription.title === 'Offre Standard') {
              if (values.amount < 100 || values.amount > 750) {
                errors.amount =
                  "L'investissement pour l'Offre Standard est compris entre  100 - 750 €";
              }
            }
            if (subscription.title === 'Offre Premium') {
              if (values.amount < 800 || values.amount > 2500) {
                errors.amount =
                  "L'investissement pour l'Offre Premium est compris entre  800 - 2500 €";
              }
            }
            if (subscription.title === 'Offre Gold') {
              if (values.amount < 2750 || values.amount > 10000) {
                errors.amount =
                  "L'investissement pour l'Offre Gold est compris entre  2750 - 10000 €";
              }
            }
            return errors;
          }}
          onSubmit={values => handlePay(values)}>
          {({handleChange, handleBlur, values, errors}) => (
            <Fragment>
              <Loader loading={loading} />
              <View style={styles.input}>
                <TextInput
                  mode="outlined"
                  autoCapitalize="none"
                  keyboardType="default"
                  value={values.amount}
                  label="Le montant de votre investissement"
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                />
                {errors.amount && (
                  <Text style={styles.labelError}>{errors.amount}</Text>
                )}
                {!errors.amount && payment_method?.name === 'Paypal' && (
                  <Button
                    onPress={() => handlePay(values)}
                    buttonColor="#0079C1"
                    textColor="white"
                    style={styles.paypalBtn}
                    theme={{roundness: 20}}>
                    Payer avec Paypal
                  </Button>
                )}
                {/* {!errors.amount && payment_method?.name === 'Orange Money' && (
                  <Button
                    onPress={() => ''}
                    buttonColor="orange"
                    textColor="white"
                    style={styles.orangeBtn}
                    theme={{roundness: 20}}>
                    Payer avec Orange Money
                  </Button>
                )} */}
              </View>
            </Fragment>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 19,
    marginTop: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  noTransac: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30,
    fontSize: 20,
  },
  desc: {
    lineHeight: 23,
    color: '#000',
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 17,
  },
  divider: {
    backgroundColor: '#9f662f',
  },
  labelError: {
    marginTop: 4,
    fontSize: 13,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  paypalBtn: {
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'center',
    marginTop: 15,
  },
  orangeBtn: {
    width: Dimensions.get('window').width / 1.2,
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default withTheme(Resume);
