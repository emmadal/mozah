import {State} from '../types';

// initial state
export const initialState: State = {
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
  earning: [],
  isSignout: true,
  projects: [],
  transactions: [],
  projectRelated: [],
};
