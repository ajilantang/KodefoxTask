import React, {Component} from 'react';
import {StyleSheet, Button, View} from 'react-native';
type Props = {
  goBack: () => void,
};
type ComponentType<Props> =
  | React.StatelessFunctionalComponent<Props>
  | Class<React.Component<Props, any>>;
export default function wrapper(
  Component: ComponentType,
): ComponentType<Props> {
  return (props: Props): React.Element<C> => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button title={'go back'} onPress={() => props.goBack()} />
        </View>
        <Component {...props} />
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    height: 100,
    backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
