import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Transactions from '../screens/Transactions';
import Settings from '../screens/Settings';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabBar = ({theme}: any) => {
  const {colors} = theme;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderColor: 'transparent',
          height: Platform.OS === 'ios' ? 77 : 55,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Accueil',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="home-outline"
              size={20}
              color={focused ? colors.primary : colors.placeholder}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.placeholder,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          title: 'Liste des transactions',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({focused}) => (
            <Icon
              name="stats-chart-outline"
              size={20}
              color={focused ? colors.primary : colors.placeholder}
            />
          ),
          tabBarLabel: 'Transactions',
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.placeholder,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Mon profile',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="man"
              size={20}
              color={focused ? colors.primary : colors.placeholder}
            />
          ),
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.placeholder,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Paramètres',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="cog"
              size={20}
              color={focused ? colors.primary : colors.placeholder}
            />
          ),
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.placeholder,
        }}
      />
    </Tab.Navigator>
  );
};

export default withTheme(TabBar);
