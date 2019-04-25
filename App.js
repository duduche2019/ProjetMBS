/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Films from './screens/Films'
import Series from './screens/Series'
import JeuxVideo from './screens/JeuxVideo'
import MovieDescription from './screens/MovieDescription'

const TabNavigator = createBottomTabNavigator({
  Films: Films,
  Series: Series,
  JeuxVideo: JeuxVideo,
});

const StackNavigator = createStackNavigator({
   Home: {screen: TabNavigator},
   MovieDescription: {screen: MovieDescription}
})

export default createAppContainer(StackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
