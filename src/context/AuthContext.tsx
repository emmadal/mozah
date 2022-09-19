/* eslint-disable @typescript-eslint/no-unused-vars */
import {createContext} from 'react';
import {
  State,
  dispatchMethod,
  Transaction,
  ProjectRelated,
  ProjectTypes,
  User,
  Earning,
} from '../types';

export type AppContext = {
  state: State;
  dispatch: dispatchMethod;
};

export const AppState: AppContext = {
  state: {
    user: {
      phoneNumber: '',
      lastLoginTime: '',
      uid: '',
      email: '',
      fullName: '',
      photo: '',
      createdDtm: '',
      metamask_acc: '',
      type: '',
    },
    isSignout: true,
    projects: [],
    transactions: [],
    earning: [],
    projectRelated: [],
  },
  dispatch: {
    fetchProfile(user: User) {
      return;
    },
    fetchTransactions(transactions: Array<Transaction>) {
      return;
    },
    fetchProjects(projects: Array<ProjectTypes>) {
      return;
    },
    fetchProjectRelated(projectRelated: Array<ProjectRelated>) {
      return;
    },
    fetchEarning(earning: Array<Earning>) {
      return;
    },
    signOut() {
      return;
    },
  },
};

export const AuthContext = createContext<AppContext>(AppState);
