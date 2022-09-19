export type LoginTypes = {
  email: string;
  password: string;
};

export type SignupTypes = {
  email: string;
  password: string;
  name: string;
};

export type ProjectTypes = {
  id: string;
  isPublish: string;
  uid: string;
  name: string;
  budget: string;
  createdDate: string;
  desc: string;
  status: string;
  files: Array<string>;
  members: Array<string>;
};

export type Transaction = {
  amount: string;
  creation_time: string;
  currency: string;
  fullName: string;
  id: string;
  payment_method: string;
  payment_status: string;
  project_name: string;
  uid: boolean;
};

export type ProjectRelated = {
  amount_invested: number;
  fullName: string;
  id: string;
  icome: number;
  projectId: string;
  project_budget: string;
  project_name: string;
  token: number;
  uid: boolean;
};

export type User = {
  phoneNumber: string;
  lastLoginTime: string;
  uid: string;
  email: string;
  fullName: string;
  photo: string;
  createdDtm: string;
  metamask_acc: string;
  type: string;
};

export type Earning = {
  amount_invested: number;
  token: number;
  income: number;
  id: string;
};

export type State = {
  user: User;
  projects: Array<ProjectTypes>;
  transactions: Array<Transaction>;
  projectRelated: Array<ProjectRelated>;
  earning: Array<Earning>;
  isSignout: boolean;
};

export type dispatchMethod = {
  fetchProfile: (user: User) => void;
  fetchTransactions: (transactions: Transaction[]) => void;
  fetchEarning: (earning: Earning[]) => void;
  fetchProjects: (projects: ProjectTypes[]) => void;
  fetchProjectRelated: (projectRelated: ProjectRelated[]) => void;
  signOut: () => void;
};
