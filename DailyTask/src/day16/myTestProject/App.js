import React from 'react';
import {BackHandler} from 'react-native';
import Home from './src/HomeScene';
import Favorites from './src/Favorites';
import Searching from './src/Searching';

export default class App extends React.Component {
  state = {
    currentRoute: 'HOME',
    favoriteList: [],
  };
  _history = [];
  _onBackPress = () => {
    this._goBack();
    return true;
  };
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }
  _navigateTo = (route) => {
    this._history.push(route);
    this.setState({currentRoute: route});
  };
  _goBack = () => {
    let currentRoute = this._history.pop();
    if (currentRoute != null) {
      this.setState({currentRoute: this._history[this._history.length - 1]});
    }
  };
  _onFavorites = (data: Object) => {
    this.setState({favoriteList: this.state.favoriteList.concat(data)});
  };
  render() {
    let {currentRoute, favoriteList} = this.state;
    switch (currentRoute) {
      case 'HOME': {
        return <Home navigateTo={this._navigateTo} />;
      }
      case 'SEARCHING': {
        return (
          <Searching onFavorites={this._onFavorites} goBack={this._goBack} />
        );
      }
      case 'FAVORITES': {
        return <Favorites favoriteList={favoriteList} goBack={this._goBack} />;
      }
      default:
        return <Home navigateTo={this._navigateTo} />;
    }
  }
}
