import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,Icon,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';


class FlatListItem extends Component{
  render(){
    var detail = this.props.item.detail;

    if(detail.length > 50) {
      detail = detail.substr(0,50);
      detail = detail + "...";
    }

    var address = this.props.item.address;

    if(address.length > 30) {
      address = address.substr(0,30);
      address = address + "...";
    }

    return (
      <View style = {styles.itemList}>
      <View style = {styles.shadowImage}>
        <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
      </View>
      <View style = {{flex:1,flexDirection: 'column'}}>
        <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
        <Text style = {styles.brandStyle}>{address}</Text>
        <Text style = {styles.detailStyle}>{detail}</Text>
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
    detailStyle:{
      marginTop: 5,
      marginLeft: 15,
      fontSize: 15
    },
    imageStyle: {
      width: 100,
      height: 110,
      borderRadius: 10,
    },
    imageStyleHeader:{
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    nameStyle:{
      fontWeight: 'bold',
      color: 'black',
      marginTop: 5,
      marginLeft: 15,
      fontSize: 15
    },
    brandStyle:{
      marginLeft: 15,
      marginTop: 5,
      fontSize: 12
    },
    shadowImage:{
      width: 100,
      height: 110,
      borderRadius: 10,
      marginLeft: 10,
      marginBottom: 10,
      elevation: 5
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