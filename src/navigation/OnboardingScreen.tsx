import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Introduction from '../screens/Introduction';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgetPassword from '../screens/ForgetPassword';

const Stack = createNativeStackNavigator();

const Onboarding: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => null,
          headerLeft: () => null,
          headerTitle: () => null,
          headerShown: false,
          gestureEnabled: false,
        }}
        name="Introduction"
        component={Introduction}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerTitle: 'Se connecter',
          headerBackTitle: 'Retour',
          headerTitleAlign: 'center',
        }}
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        options={{
          headerTitle: 'Création de compte',
          headerBackTitle: 'Retour',
          headerTitleAlign: 'center',
        }}
        component={Signup}
      />
      <Stack.Screen
        name="ForgetPassword"
        options={{
          headerTitle: 'Mot de passe oublié ?',
          headerBackTitle: 'Retour',
          headerTitleAlign: 'center',
        }}
        component={ForgetPassword}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
