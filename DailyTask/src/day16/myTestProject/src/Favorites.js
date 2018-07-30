import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import Wrapper from './Wrapper';
type Props = {
  goBack: () => void,
  favoriteList: Array<Object>,
};
function favoritesScence(props: Props) {
  let {favoriteList = []} = props;

  return (
    <ScrollView>
      {favoriteList.map(({uri}, index) => {
        return (
          <View key={index} style={styles.container}>
            <Image source={{uri}} style={styles.images} />
            <View style={styles.favorite} />
          </View>
        );
      })};
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 4,
    height: 32,
    width: 200,
  },
  images: {width: 150, height: 150},
  favorite: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'blue',
  },
});
export default Wrapper(favoritesScence);
