//@flow
import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

type Props = {
  navigateTo: (string) => void,
};

export default function HomeScene(props: Props) {
  let {navigateTo} = props;
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => navigateTo('SEARCHING')}
        title="Search Image"
      />
      <Button onPress={() => navigateTo('FAVORITES')} title="Favorite" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 50,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
  },
});
