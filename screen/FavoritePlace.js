import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';
import FlatListItem from '../component/ItemListMore';
import Icon from 'react-native-vector-icons/Ionicons';


  const styles = StyleSheet.create({
    imageStyleHeader:{
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    headerStyle:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeIcon:{
      width: 20,
      height: 20,
      borderRadius: 10
    },
    headerText:{
      fontSize:20,
      fontWeight: 'bold',
      marginLeft: 25,
      color: 'black',
      fontFamily: "MontserratBlack"
    },
    headerIcon:{
      marginLeft:'auto',
      marginRight:10,
      marginBottom: 0
    },
    lineStyle:{
      borderTopColor: 'gray',
      borderTopWidth: 0.5,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15
    },
    listStyle:{
      marginTop: 20
    }
  });


export default class FavoritePlace extends Component{



  render(){
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.headerStyle}>
          <Text style = {styles.headerText}>Địa Điểm Yêu Thích</Text>
          <TouchableOpacity style = {styles.headerIcon}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK_z4_pdETl1TTOl6Jy1pmtZnegrVIeFMXH5JZNWb_eQm-mo5'}} style = {styles.closeIcon}></Image>
          </TouchableOpacity>
        </View>
        <Text style = {styles.lineStyle}></Text>
        <FlatList style = {styles.listStyle}
        data = {branditem}
        renderItem = {({item,index}) => {
          return(
            <FlatListItem item = {item} index= {index}></FlatListItem>
          );
        }}>
        </FlatList>
      </View>
    );
  }
}


FavoritePlace.navigationOptions = {
  tabBarIcon : ({focused}) => (
    <Icon
      name = "md-heart-empty"
      size = {30}
      color = {focused ? "blue" : "black"}
    />
  )
}
