import React, { Component } from 'react';
import {  AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import imageAdd from '../data/imageAdd';




const styles = StyleSheet.create({
  imageItem:{
    height:130,
    width:100,
    borderRadius: 10
  },
  listItem:{
    height:130,
    width:100,
    elevation: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  listStyle:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30
  },
  headerStyle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom:7,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  imageIcon:{
    height:50,
    width:50,
  }
});





export default class ImagePickerProject extends React.Component {


  render() {

    return (
      <View style={{ flex: 1 }}>

        <Text style = {styles.headerStyle}>Thêm Địa Điểm </Text>

        <FlatList style = {styles.listStyle}
        horizontal = {true}
        data = {imageAdd}
        renderItem = {({item,index}) => {
          return(
            <HorizontalFlatListItem item = {item} index= {index}></HorizontalFlatListItem>
          );
        }}>
        </FlatList>

      </View>
    );
  }
}


class HorizontalFlatListItem extends Component{

  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };

  render(){
    const { photo } = this.state;
    return (
      <TouchableOpacity onPress={this.handleChoosePhoto} style = {styles.listItem}>
        {photo == null ? <Image source = {{uri:'https://png.pngtree.com/svg/20161219/create_btn_add_photo_1143435.png'}} style = {styles.imageIcon}></Image> :
        <Image source = {{uri:photo.uri}} style = {styles.imageItem}></Image>}
      </TouchableOpacity>
    );
    }
  }


  ImagePickerProject.navigationOptions = {
    tabBarIcon : ({focused}) => (
      <View style = {{width: 40,height:40}}>
      <Icon
        name = "pluscircle"
        size = {35}
        color = {focused ? "blue" : "black"}
      />
      </View>
    )
  }
