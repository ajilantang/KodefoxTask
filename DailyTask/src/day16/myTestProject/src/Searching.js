//@flow
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import Wrapper from './Wrapper';
type Obj = {
  text: string,
  images: Array<string>,
};
type Props = {
  onFavorites: (Object) => void,
};
class Searching extends React.Component<Props, Obj> {
  state = {
    text: '',
    images: [],
  };
  async _fetchStuff(text: string) {
    let url = `https://api.imgur.com/3/gallery/search/?q=${text}`;
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Client-ID dc7630e45080d85',
      },
    });
    let response = await res.json();
    let images: Array<string> = response.data
      .filter((item) => !item.is_album)
      .map(({link}) => link);
    this.setState({images, text: ''});
  }

  _onChangeText(text: string) {
    this.setState({text});
  }
  _onSearching() {
    let {text} = this.state;
    this._fetchStuff(text);
  }
  render() {
    let {text, images} = this.state;
    let {onFavorites} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text: string) => this._onChangeText(text)}
        />
        <TouchableWithoutFeedback onPress={() => this._onSearching()}>
          <View>
            <Text>Click Me</Text>
          </View>
        </TouchableWithoutFeedback>
        <ScrollView>
          {images.map((uri, index) => {
            return (
              <View key={index}>
                <Image source={{uri}} style={styles.images} />
                <View style={styles.favorite} />
                <Button onPress={() => onFavorites({uri})} title="Favorite" />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 10,
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
    flex: 1,
    height: 6,
    bottom: 8,
    right: 8,
    backgroundColor: 'black',
  },
});

export default Wrapper(Searching);
