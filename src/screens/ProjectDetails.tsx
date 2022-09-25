import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  LogBox,
  Dimensions,
} from 'react-native';
import {
  withTheme,
  Headline,
  Divider,
  Subheading,
  Button,
  Text,
  Chip,
} from 'react-native-paper';
import SlideImage from '../components/SlideImage';
import theme from '../themes';

LogBox.ignoreLogs(['Sending...']);

const ProjectDetails: React.FC = ({route, navigation}: any) => {
  const {item} = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <SlideImage CarouselItem={item?.files} />
        <View style={styles.content}>
          <View style={styles.header}>
            <Headline style={styles.title}>{item.name}</Headline>
            <Subheading>{item?.desc}</Subheading>
          </View>
          <Divider />
          <View style={styles.descriptionContent}>
            <Headline style={styles.title}>Détails du projet</Headline>
            <View style={styles.detailsView}>
              <Text style={styles.servicesText}>Budget du projet :</Text>
              <Text style={styles.servicesAmount}>{item?.budget} €</Text>
            </View>

            <View style={styles.detailsView}>
              <Text style={styles.servicesText}>Etat du projet: </Text>
              <Chip
                style={styles.servicesAmount}
                selectedColor={theme.colors.error}
                icon="check">
                {item?.status}
              </Chip>
            </View>
          </View>
        </View>
        <Button
          buttonColor={theme.colors.primary}
          textColor={theme.colors.light}
          theme={{roundness: 2}}
          onPress={() => navigation.navigate('Offer', {project: item})}
          style={styles.btn}>
          Investir dans ce projet
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Platform.OS === 'ios' ? 20 : 15,
  },
  btn: {
    width: Dimensions.get('window').width / 1.2,
    padding: 4,
    alignSelf: 'center',
  },
  detailsView: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  servicesText: {
    fontSize: 18,
  },
  servicesAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 13,
  },
  descriptionContent: {
    marginVertical: 10,
  },
});

export default withTheme(ProjectDetails);
