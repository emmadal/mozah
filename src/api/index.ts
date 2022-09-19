import {
  Earning,
  LoginTypes,
  ProjectTypes,
  SignupTypes,
  Transaction,
  User,
} from './../types/index';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import base64 from 'react-native-base64';
import firestore from '@react-native-firebase/firestore';

const PAYPAL_ENDPOINT = 'https://api-m.sandbox.paypal.com';
const CLIENT_ID =
  'ASXCGrhNZwvGmgjjDJlFXjouR1CEs3LDcvWsmaQIblIC-2pJVQaL2DFZx8HP5v_wmbPxY-AP2zpAneKz';
const SECRET_ID =
  'EImSiqOOq-McMYrjkAF9DbeHKyeejttqeGiJlTC5wdOhMW0fDzptDM8zgivIsXSO4l4F1L5LjiN7sVR3';
const db = firestore();

/**
 * Login User
 */
export const login = async (data: LoginTypes) => {
  return new Promise<User>((resolve, reject) => {
    const {email, password} = data;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(signin => {
        if (signin.user) {
          db.collection('users')
            .doc(signin.user.uid)
            .get()
            .then(user => {
              resolve(user.data());
            });
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Register User
 */
export const registerUser = async (data: SignupTypes) => {
  return new Promise<boolean>((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        db.collection('users')
          .doc(res.user.uid)
          .set({
            uid: res.user?.uid,
            metamask_acc: '',
            fullName: res.user?.displayName ?? data.name,
            email: res.user?.email ?? '',
            photo: res.user?.photoURL ?? '',
            phoneNumber: res.user?.phoneNumber ?? '',
            type: 'user',
            createdDtm: res.user.metadata.creationTime,
            lastLoginTime: res.user.metadata.lastSignInTime,
          })
          .then(() => resolve(true));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('Cette adresse est deja utilisé');
        }
        if (error.code === 'auth/invalid-email') {
          reject("L'adresse Email est invalide !");
        }
        reject(error);
      });
  });
};

/**
 * Get User Profile
 */
export const getProfile = async (uid: string) => {
  return new Promise<User>((resolve, reject) => {
    db.collection('users')
      .doc(uid)
      .get()
      .then(doc => resolve(doc.data()))
      .catch(err => reject(err));
  });
};

/**
 * Get user by Email
 */
export const getUserByEmail = async (email: string) => {
  const user: any = [];
  const res = await db.collection('users').where('email', '==', email).get();
  if (!res.empty) {
    res.docs.map(doc => user.push(doc.data()));
    return user[0];
  }
};

/**
 * Send reset password link
 */
export const sendResetPasswordLink = async (email: string) => {
  const user = await getUserByEmail(email);
  if (user) {
    await auth().sendPasswordResetEmail(email);
    return true;
  }
  return false;
};

/**
 * Upload user photo
 */
export const uploadUserPhoto = async (uri: string, fileName: string) => {
  const task = await storage().ref('users').child(`${fileName}`).putFile(uri, {
    cacheControl: 'no-store',
  });
  if (task.state === 'success') {
    const url = await storage().ref(`users/${fileName}`).getDownloadURL();
    return url;
  }
};

/**
 * Log out user
 */
export const logOutUser = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    auth()
      .signOut()
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
};

/**
 * Get all projects when isPublish = Yes
 */
export const getProjectsPublished = (): Promise<ProjectTypes[]> => {
  const doc = db.collection('projects');
  return new Promise((resolve, reject) => {
    const data: any = [];
    const query = doc.where('isPublish', '==', 'Oui');
    query
      .get()
      .then(res => {
        if (!res.empty) {
          res.docs.map(e => data.push(e.data()));
          resolve(data);
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Get transactions by user
 */
export const getTransactions = (userId: string): Promise<Transaction[]> => {
  const doc = db.collection('transactions');
  return new Promise((resolve, reject) => {
    const data: any = [];
    doc
      .where('uid', '==', userId)
      .orderBy('creation_time', 'desc')
      .get()
      .then(res => {
        if (!res.empty) {
          res.docs.map(e => data.push(e.data()));
          resolve(data);
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Get related project by userId
 */
export const getRelatedProject = (userId: String): Promise<Earning[]> => {
  const doc = db.collection('project_related');
  return new Promise((resolve, reject) => {
    const data: any = [];
    doc
      .where('uid', '==', userId)
      .get()
      .then(res => {
        if (!res.empty) {
          res.docs.map(e => {
            const {amount_invested, income, token, id} = e.data();
            data.push({amount_invested, income, token, id});
          });
          resolve(data);
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Get Authentication token from Paypal
 */
export const getPaypalAuthToken = () => {
  return new Promise((resolve, reject) => {
    const encodedToken = base64.encode(`${CLIENT_ID}:${SECRET_ID}`);
    const params = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        grant_type: 'client_credentials',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedToken}`,
      },
      body: 'grant_type=client_credentials',
    };
    fetch(`${PAYPAL_ENDPOINT}/v1/oauth2/token`, params)
      .then(doc => doc.json())
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
};

/**
 * Create transaction
 */
export const addTransaction = (data: any) => {
  const doc = db.collection('transactions');
  return new Promise((resolve, reject) => {
    doc
      .add({...data})
      .then(() => resolve(true))
      .catch(err => reject(err));
  });
};

/**
 * Affiliate project
 */
export const affiliateProject = ({fullName, uid}, project) => {
  const collection = db.collection('project_related');
  return new Promise((resolve, reject) => {
    const query = collection
      .where('uid', '==', uid)
      .where('project_name', '==', project.project_name);
    query
      .get()
      .then(e => {
        if (e.empty) {
          const id = String(new Date().getTime());
          collection
            .doc(id)
            .set({fullName, uid, id, ...project})
            .then(() => resolve(true));
        } else {
          const r: any = [];
          e.docs.map(u => r.push(u.data()));
          collection
            .doc(`${r[0].id}`)
            .update({
              token: r[0].token + project.token,
              amount_invested: r[0].amount_invested + project.amount_invested,
              income: r[0].income + project.income,
            })
            .then(() => resolve(true));
        }
      })
      .catch(err => reject(err));
  });
};

/**
 * Update user profile
 */
export const updateUserProfile = (user: User, data: any) => {
  const collection = db.collection('users');
  return new Promise<User>((resolve, reject) => {
    collection
      .doc(`${user?.uid}`)
      .update({
        fullName: data?.fullName ?? user?.fullName,
        photo: data?.photoURL ?? user?.photo,
        phoneNumber: data?.phoneNumber ?? user?.phoneNumber,
        metamask_acc: data?.metamask_acc ?? user?.metamask_acc,
      })
      .then(() => {
        getProfile(user?.uid).then(e => resolve(e));
      })
      .catch(err => reject(err));
  });
};
