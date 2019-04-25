import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity } from 'react-native';

export default class CustomMoviesListItem extends Component {
    
    render() {
      const { item, onItemClick } = this.props
      return (
          <TouchableOpacity onPress={()=> onItemClick(item)}>
            <View style={styles.container}>
                <Image source={item.imgSrc} style= {styles.image}></Image>
                <View style= {styles.infosRightSide}>
                    <Text style= {styles.title}>{item.title} </Text>
                    <Text>{item.date}</Text>
                    
                    
                </View>
            </View>
        </TouchableOpacity>
      )
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 80,
        height: 120,
        margin: 15
    },
    infosRightSide: {
        margin: 15
    },
    title: {
        frontSize: 22,
        textAlign: 'justify'
    }
}