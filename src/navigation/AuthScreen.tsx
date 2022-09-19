import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {withTheme} from 'react-native-paper';
import TabBar from './TabBar';
import ProjectDetails from '../screens/ProjectDetails';
import Resume from '../screens/Resume';
import LegalMention from '../screens/LegalMention';
import CGU from '../screens/CGU';
import Offer from '../screens/Offer';
import PaymentSuccess from '../screens/PaymentSuccess';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        options={({route}) => ({
          headerTitle: `${route?.params?.item?.name}`,
          headerBackTitle: 'Retour',
        })}
      />
      <Stack.Screen
        name="Offer"
        component={Offer}
        options={{
          headerTitle: 'Nos offres',
          headerBackTitle: 'Retour',
        }}
      />
      <Stack.Screen
        name="Resume"
        component={Resume}
        options={{
          headerTitle: "Confirmation d'investissement",
          headerBackTitle: 'Retour',
        }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={{
          headerRight: () => null,
          headerLeft: () => null,
          headerTitle: () => null,
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="LegalMention"
        component={LegalMention}
        options={{
          headerTitle: 'Mention Légales',
          headerBackTitle: 'Retour',
        }}
      />
      <Stack.Screen
        name="CGU"
        component={CGU}
        options={{
          headerTitle: "Conditions Génerale d'utilisation",
          headerBackTitle: 'Retour',
        }}
      />
    </Stack.Navigator>
  );
};

export default withTheme(AuthStack);
