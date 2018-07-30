import React from 'react';
import {StyleSheet, Text, View, Button, Picker} from 'react-native';
import {createStackNavigator} from 'react-navigation';
class HelloScene extends React.Component {
  state = {
    tes: 'test',
    language: '',
  };
  static navigationOptions = ({navigation}) => {
    return {
      title: 'props.title',
      headerRight: (
        <Button
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              name: 'Aji',
              title: 'test',
            })
          }
          title={this.state}
          color="#fff"
        />
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back"
        />
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="k" value="k" />
          <Picker.Item label="b" value="b" />
        </Picker>
      </View>
    );
  }
}

function Profile(props) {
  let {navigation} = props;
  let name = navigation.getParam('name', 'Gak ada');
  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
    </View>
  );
}

function Wrapper(Component) {
  return (props) => {
    return class extends React.Component {
      state = {test: 'yo'};
      static navigationOptions = ({navigation}) => {
        return {
          title: props.title,
          headerStyle: {backgroundColor: props.backgroundColor},
          headerRight: props.rightButton ? (
            <Button
              onPress={() =>
                navigation.navigate('Profile', {
                  name: 'Aji',
                  title: 'test',
                })
              }
              title={'this.state.tes'}
              color="#fff"
            />
          ) : null,
        };
      };
      render() {
        let data = {...props, ...this.props};
        return <Component {...data} />;
      }
    };
  };
}
let HomeWrapper = Wrapper(HomeScene);

function HomeScene(props) {
  return (
    <View>
      <Button
        onPress={() =>
          props.navigation.navigate('Profile', {name: 'Aji', title: 'test'})
        }
        title="Go to Profile Aji"
      />
      <Button
        onPress={() => props.navigation.navigate('Profile', {name: 'Jorgie'})}
        title="Go to Profile Jorgie"
      />
      <Button
        onPress={() => props.navigation.navigate('Hello')}
        title="Go to Hello"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootState = createStackNavigator(
  {
    Home: HomeWrapper({title: 'Home', backgroundColor: '#063844'}),
    Hello: Wrapper(HelloScene)({title: 'Hello', backgroundColor: '#063844'}),
    Profile: Profile,
  },
  {initialRoutes: HomeScene},
);

export default class App extends React.Component {
  render() {
    return <RootState />;
  }
}
