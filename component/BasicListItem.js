import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,Icon,TouchableOpacity } from 'react-native';
import flatListData from '../data/flatListData';


class FlatListItem extends Component{
  render(){
    return (
      <View style = {styles.itemList}>
      <View style = {styles.shadowImage}>
        <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
      </View>
      <View style = {{flex:1,flexDirection: 'column'}}>
        <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
        <Text style = {styles.brandStyle}>{this.props.item.numberBrand}</Text>
      </View>
      </View>
    );
    }
  }


  const styles = StyleSheet.create({
    itemList:{
      flex: 1,
      flexDirection: 'row',
      marginTop: 5,
      marginBottom: 5,
      borderBottomColor: '#D6D5D5',
      borderBottomWidth: 3,
    },
    imageStyle: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    nameStyle:{
      fontWeight: 'bold',
      marginTop: 5,
      marginLeft: 15
    },
    brandStyle:{
      marginLeft: 15,
      marginTop: 15
    },
    shadowImage:{
      width: 100,
      height: 100,
      borderRadius: 10,
      marginLeft: 10,
      marginBottom: 10,
      elevation: 5
    },
    headerStyle:{
      flexDirection: 'row',
      justifyContent: 'center'
    },
    closeIcon:{
      width: 20,
      height: 20,
      borderRadius: 10
    },
    headerText:{
      fontSize:20,
      fontWeight: 'bold',
      marginLeft: 15,
      color: 'black'
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


export default class BasicListItem extends Component{
  render(){
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.headerStyle}>
          <Text style = {styles.headerText}>Thương Hiệu Nổi Tiếng</Text>
          <TouchableOpacity style = {styles.headerIcon}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK_z4_pdETl1TTOl6Jy1pmtZnegrVIeFMXH5JZNWb_eQm-mo5'}} style = {styles.closeIcon}></Image>
          </TouchableOpacity>
        </View>
        <Text style = {styles.lineStyle}></Text>
        <FlatList style = {styles.listStyle}
        data = {flatListData}
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
