import React, {useContext, useState, useCallback} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
  Platform,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, request} from 'react-native-permissions';
import {
  withTheme,
  Avatar,
  TextInput,
  Button,
  Snackbar,
} from 'react-native-paper';
import {updateUserProfile, uploadUserPhoto} from '../api';
import {Formik} from 'formik';
import Loader from '../components/Loader';
import {AuthContext} from '../context/AuthContext';

const Profile: React.FC = ({theme}: any) => {
  const {colors} = theme;
  const {state, dispatch} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleUploadImage = useCallback(async () => {
    const {IOS, ANDROID} = PERMISSIONS;

    // request permissions to read picture on device
    if (Platform.OS === 'ios') {
      await request(IOS.CAMERA);
    }
    if (Platform.OS === 'android') {
      await request(ANDROID.READ_EXTERNAL_STORAGE, {
        title: 'eWallet',
        message: 'Allow to acces your media library ?',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
    }

    // Check the permission if it granted (allowed)
    const status =
      Platform.OS === 'ios' ? IOS.CAMERA : ANDROID.READ_EXTERNAL_STORAGE;
    const permission = await check(status);

    if (permission === 'granted') {
      const pic = await launchImageLibrary({
        mediaType: 'photo',
        saveToPhotos: true,
      });
      setLoading(!loading);
      if (pic.assets) {
        try {
          const photoURL = await uploadUserPhoto(
            pic?.assets[0].uri,
            pic?.assets[0].fileName,
          );
          if (photoURL) {
            const req = await updateUserProfile(state.user, {photoURL});
            dispatch.fetchProfile(req);
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          console.log('error message: ', error);
        }
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
      Alert.alert('Permission non autorisée');
    }
  }, [dispatch, loading, state]);

  const onDismissSnackBar = () => setVisible(false);

  const getFirstLetterOfName = () => {
    const matches = state.user.fullName.match(/\b(\w)/g);
    return matches?.join('');
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scroll}>
        <TouchableOpacity onPress={handleUploadImage} style={styles.avatar}>
          {state.user.photo ? (
            <Avatar.Image
              size={70}
              source={{
                uri: state.user.photo,
              }}
            />
          ) : (
            <Avatar.Text
              color={colors.white}
              size={70}
              label={getFirstLetterOfName()}
            />
          )}
        </TouchableOpacity>
        <Formik
          initialValues={{
            email: state.user.email,
            fullName: state.user.fullName || '',
            phoneNumber: state.user.phoneNumber || '',
            metamask_acc: state.user.metamask_acc || '',
          }}
          onSubmit={async values => {
            try {
              setLoading(!loading);
              const req = await updateUserProfile(state.user, values);
              if (req) {
                setLoading(false);
                setVisible(!visible);
                dispatch.fetchProfile(req);
              }
            } catch (error) {
              Alert.alert('Operation echouée');
              setLoading(false);
              return;
            }
          }}>
          {({handleChange, handleBlur, values, handleSubmit}) => (
            <SafeAreaView>
              <Loader loading={loading} />
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  disabled
                  value={values.email}
                  mode="outlined"
                  label="Email"
                  right={<TextInput.Icon name="email" color={colors.primary} />}
                />
              </View>
              <TextInput
                style={styles.input}
                mode="outlined"
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                autoFocus={true}
                maxLength={17}
                autoCapitalize="none"
                value={values.fullName}
                label="Nom & Prénom"
                right={
                  <TextInput.Icon name="human-male" color={colors.primary} />
                }
              />
              <TextInput
                style={styles.input}
                keyboardType="phone-pad"
                mode="outlined"
                autoCapitalize="none"
                value={values.phoneNumber}
                label="Numero de telephone"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                right={<TextInput.Icon name="phone" color={colors.primary} />}
              />
              <TextInput
                style={styles.input}
                mode="outlined"
                autoCapitalize="none"
                value={values.metamask_acc}
                label="Adresse metamask"
                onChangeText={handleChange('metamask_acc')}
                onBlur={handleBlur('metamask_acc')}
                right={
                  <TextInput.Icon name="clipboard" color={colors.primary} />
                }
              />
              <Button
                labelStyle={{color: colors.white}}
                onPress={handleSubmit}
                style={styles.btn}
                mode="contained"
                theme={{roundness: 20}}>
                Mise à jour
              </Button>
            </SafeAreaView>
          )}
        </Formik>
      </ScrollView>
      <Snackbar
        duration={3000}
        action={{
          label: 'Fermer',
          onPress: () => onDismissSnackBar(),
          labelStyle: {color: colors.white},
        }}
        style={{
          backgroundColor: colors.primary,
          color: colors.white,
        }}
        visible={visible}
        onDismiss={onDismissSnackBar}>
        Profil mis a jour.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  scroll: {
    paddingTop: 25,
  },
  input: {
    marginVertical: 5,
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  labelError: {
    marginTop: 4,
    fontSize: 13,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default withTheme(Profile);
