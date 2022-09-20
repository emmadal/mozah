import React, {useEffect, useMemo, useReducer} from 'react';
import {StatusBar, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext, AuthContext} from './src/context/AuthContext';
import ThemeProvider from './src/hooks/useTheme';
import Onboarding from './src/navigation/OnboardingScreen';
import AuthScreen from './src/navigation/AuthScreen';
import reducer, {ActionKind} from './src/reducer';
import {initialState} from './src/state';
import {
  getProfile,
  getProjectsPublished,
  getTransactions,
  getRelatedProject,
} from './src/api';

const App = () => {
  // use useReducer hooks
  const [state, dispatch] = useReducer(reducer, initialState);

  // AuthContext
  const authContext: AppContext = useMemo(
    () => ({
      state,
      dispatch: {
        fetchProfile(user) {
          dispatch({
            type: ActionKind.GET_PROFILE,
            payload: user,
          });
        },
        fetchTransactions(transactions) {
          dispatch({
            type: ActionKind.GET_TRANSACTIONS,
            payload: transactions,
          });
        },
        fetchProjects(projects) {
          dispatch({
            type: ActionKind.GET_PROJECTS,
            payload: projects,
          });
        },
        fetchProjectRelated(projectRelated) {
          dispatch({
            type: ActionKind.GET_PROJECT_RELATED,
            payload: projectRelated,
          });
        },
        fetchEarning(earning) {
          dispatch({
            type: ActionKind.GET_EARNING,
            payload: earning,
          });
        },
        signOut() {
          dispatch({type: ActionKind.SIGNOUT});
        },
      },
    }),
    [state],
  );

  // Handle user state changes
  const onAuthStateChanged = (userAuth: any) => {
    getProfile(userAuth?.uid)
      .then(user => {
        if (user) {
          authContext.dispatch.fetchProfile(user);
          // Get list of projects published
          getProjectsPublished().then(response =>
            authContext.dispatch.fetchProjects(response),
          );
          // Get list of transactions
          getTransactions(user.uid).then(transactions =>
            authContext.dispatch.fetchTransactions(transactions),
          );
          // Get list of earnings
          getRelatedProject(user.uid).then(earnings =>
            authContext.dispatch.fetchEarning(earnings),
          );
          //Hide Splash screen on app load.
          SplashScreen.hide();
        } else {
          SplashScreen.hide();
          authContext.dispatch.signOut();
        }
      })
      .catch(() => {
        SplashScreen.hide();
        authContext.dispatch.signOut();
      });
  };

  useEffect(() => {
    //Check if user is authenticated on app load..
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  return (
    <ThemeProvider>
      <StatusBar
        backgroundColor={Platform.OS === 'ios' ? 'transparent' : '#9f662f'}
        barStyle={Platform.OS === 'android' ? 'light-content' : 'default'}
        networkActivityIndicatorVisible={true}
      />
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {!state?.isSignout ? <AuthScreen /> : <Onboarding />}
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
