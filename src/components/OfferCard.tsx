import React, {useMemo, useRef, useCallback, useState, Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {withTheme, List, Button, Title} from 'react-native-paper';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {payments} from '../data';
import {useNavigation} from '@react-navigation/native';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

const OfferCard = ({item, theme, project}: any) => {
  const {colors} = theme;
  const [indexBottomRef, setIndexBottomRef] = useState(-1);
  const [checked, setChecked] = useState({});
  const navigation = useNavigation();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback(() => {}, []);

  // renders
  const renderBackdrop = useCallback(
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );
  const handleMethod = (obj: React.SetStateAction<{}>) => setChecked(obj);

  const toggleSheet = () => bottomSheetRef.current?.expand();

  const closeSheet = () => {
    bottomSheetRef.current?.close();
    setChecked({});
  };

  const goToValidation = () => {
    bottomSheetRef.current?.close();
    if (Object.keys(checked).length) {
      navigation.navigate('Resume', {
        project,
        payment_method: checked,
        subscription: item,
      });
      setChecked({});
    } else {
      Alert.alert('Sélectionnez une méthode de paiement avant de continuer');
    }
  };

  return (
    <Fragment>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.auth}>Montant autorisé</Text>
        </View>
        <Text style={styles.price}>{item?.price}</Text>
        <Button
          onPress={toggleSheet}
          buttonColor="#9f662f"
          textColor="white"
          style={styles.btn}
          theme={{roundness: 5}}>
          Choisir Cette Offre
        </Button>
        <Text style={styles.offer}>Cette offre inclus: </Text>
        <List.Item
          style={styles.listItem}
          title={item?.investment}
          titleStyle={styles.item}
          titleNumberOfLines={2}
          left={() => (
            <List.Icon style={styles.listIcon} icon="tag" color="#9f662f" />
          )}
        />
        <List.Item
          title={item?.productivity}
          style={styles.listItem}
          titleStyle={styles.item}
          titleNumberOfLines={2}
          left={() => (
            <List.Icon style={styles.listIcon} icon="tag" color="#9f662f" />
          )}
        />
        <List.Item
          title={item?.value}
          style={styles.listItem}
          titleStyle={styles.item}
          titleNumberOfLines={2}
          left={() => (
            <List.Icon style={styles.listIcon} icon="tag" color="#9f662f" />
          )}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={indexBottomRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Title style={styles.desc}>
            Selectionez votre méthode de paiement
          </Title>
          {payments.map(element => (
            <Pressable
              key={element?.id}
              style={styles.rows}
              onPress={() => handleMethod(element)}>
              <Image style={styles.img} source={element?.img} />
              <Title style={styles.name}>{element.name}</Title>
              <Icon
                name={
                  element?.id === checked?.id
                    ? 'radio-btn-active'
                    : 'radio-btn-passive'
                }
                style={styles.icon}
                size={20}
                color={item.id === checked?.id ? '#9f662f' : colors.text}
              />
            </Pressable>
          ))}
          <View style={styles.btnAction}>
            <TouchableOpacity onPress={goToValidation}>
              <Text style={styles.continue}>Continuer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeSheet}>
              <Text style={styles.cancel}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cancel: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 20,
  },
  continue: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  auth: {
    marginTop: 15,
    fontSize: 17,
    color: '#000',
  },
  offer: {
    fontSize: 15,
    marginTop: 17,
    marginLeft: 5,
    color: '#000',
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 13,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 27,
    color: '#000',
  },
  btn: {
    width: Dimensions.get('window').width / 1.7,
    alignSelf: 'center',
  },
  labelStyle: {
    fontSize: 15,
  },
  item: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  listIcon: {
    marginRight: -5,
    marginLeft: -8,
  },
  listItem: {
    marginBottom: -28,
  },
  img: {
    height: 50,
    width: 50,
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  logo: {
    marginBottom: 10,
  },
  containerLogo: {
    alignItems: 'center',
    marginTop: 30,
  },
  btnAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginLeft: 10,
  },
});

export default withTheme(OfferCard);
