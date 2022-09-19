import {State} from '../types';

export enum ActionKind {
  GET_PROFILE = 'GET_PROFILE',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  GET_PROJECT_RELATED = 'GET_TRANSACTIONS',
  GET_PROJECTS = 'GET_PROJECTS',
  GET_EARNING = 'GET_EARNING',
  SIGNOUT = 'SIGNOUT',
}

type Action = {
  type: ActionKind;
  payload?: any;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        isSignout: false,
      };
    case ActionKind.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case ActionKind.GET_PROJECT_RELATED:
      return {
        ...state,
        projectRelated: action.payload,
      };
    case ActionKind.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ActionKind.GET_EARNING:
      return {
        ...state,
        earning: action.payload,
      };
    case ActionKind.SIGNOUT:
      return {
        ...state,
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
    default:
      return state;
  }
};

export default reducer;
