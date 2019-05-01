import React, { Component } from 'react';
import { TextInput,AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';
import FlatListItem from '../component/ItemListMore';
import Icon from 'react-native-vector-icons/Ionicons';

import TextField from '../component/common/TextField/TextField';



const styles = StyleSheet.create({
  inputMargin : {
    marginTop: 30
  },
  headerText:{
    fontSize:20,
    fontWeight: 'bold',
    color: 'black'
  },
  headerIcon:{
    marginLeft:'auto',
    marginBottom: 0
  },
  headerStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 15,
    marginRight:15,
    paddingBottom:10
  },
  closeIcon:{
    width: 20,
    height: 20,
    borderRadius: 10
  },
  buttonStyle:{
    height: 35,
    width: 200,
    borderRadius: 20,
    backgroundColor: "blue",
    elevation: 2,
    textAlign: "center",
    textAlignVertical:"center",
    color: "white"
  }
});



export default class FilterPlace extends Component{
  state = {
    text: ''
  };
  render(){
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.headerStyle}>
          <Text style = {styles.headerText}>Lọc Địa Điểm</Text>
          <TouchableOpacity style = {styles.headerIcon}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK_z4_pdETl1TTOl6Jy1pmtZnegrVIeFMXH5JZNWb_eQm-mo5'}} style = {styles.closeIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style = {{marginTop: 40}}>
          <View style = {styles.inputMargin}>
            <TextField
              title = "Khoảng Cách"
              placeholder = ""
              value = {this.state.text}
              onChangeText={(text) => this.setState({text})}
            >
            </TextField>
          </View>
          <View style = {styles.inputMargin}>
            <TextField
              title = "Thể Loại"
              placeholder = ""
              value = {this.state.text}
              onChangeText={(text) => this.setState({text})}
            >
            </TextField>
          </View>
          <View style = {styles.inputMargin}>
            <TextField
              title = "Đánh Giá"
              placeholder = ""
              value = {this.state.text}
              onChangeText={(text) => this.setState({text})}
            >
            </TextField>
          </View>
          <View style = {styles.inputMargin}>
            <TextField
              title = "Thời gian đang mở cửa"
              placeholder = ""
              value = {this.state.text}
              onChangeText={(text) => this.setState({text})}
            >
            </TextField>
          </View>
        </View>
        <TouchableOpacity style ={{ alignItems: 'center',justifyContent: 'center',marginTop: 50 }} >
          <Text style = {styles.buttonStyle}>Đăng Kí</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
