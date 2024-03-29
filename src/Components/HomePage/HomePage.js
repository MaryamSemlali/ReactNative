import React, { Component } from 'react';

import {withRouter} from 'react-router-native';
import { View,Text,Image, ScrollView} from 'react-native';

import styles from './style';
import ListHomePageItem from './HomePageItems/homePageItems'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView style={styles.container}>
        <ListHomePageItem onPress={()=>this.props.history.push("/productAndSolution")} image={require("../../assets/images/HomePage/produits.jpg")} title="produits et Solutions"/> 
        <ListHomePageItem onPress={()=>this.props.history.push("/news")} image={require("../../assets/images/HomePage/actus.jpg")} title="News"/>
        <ListHomePageItem onPress={()=>this.props.history.push("/productAndSolution")} image={require("../../assets/images/HomePage/agences.jpg")} title="testing"/>
        <ListHomePageItem onPress={()=>this.props.history.push("/productAndSolution")} image={require("../../assets/images/HomePage/agences.jpg")} title="test"/>
        </ScrollView>
    );
  }
}



export default withRouter(HomePage);
