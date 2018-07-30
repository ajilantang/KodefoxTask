// import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScene from '../HomeScene';
import FavoritesScene from '../Favorites';
export default createStackNavigator(
  {
    Home: HomeScene,
    Favorites: FavoritesScene,
  },
  {
    initialRouteName: 'Home',
  },
);
