import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {withTheme, Card, Title} from 'react-native-paper';

const ProjectCard = ({item, theme}: any) => {
  const navigation = useNavigation();
  const {colors} = theme;

  const goToDetails = () => navigation.navigate('ProjectDetails', {item});

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <Card style={[styles.card, {backgroundColor: colors.primary}]}>
        <Card.Cover source={{uri: item?.files[0].link}} style={styles.image} />
        <Title style={styles.text}>{item?.name}</Title>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 170,
    margin: 10,
    width: Dimensions.get('screen').width / 1.2,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    paddingLeft: 17,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default withTheme(ProjectCard);
