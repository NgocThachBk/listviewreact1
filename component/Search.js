import React, { Component } from 'react';
import { TextInput,AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';
import Icon from 'react-native-vector-icons/Ionicons';


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
    searchIconImage:{
      width: 25,
      height: 25
    },
    filterIconImage:{
      width: 25,
      height: 25,
      marginRight: 5
    },
    headerText:{
      fontSize:20,
      fontWeight: 'bold',
      marginLeft: 25,
      color: 'black'
    },
    searchIcon:{
      marginLeft: 5
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
    },
    inputStyle:{
      flex: 1,
      height: 50,
    },
    searchStyle:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor:'#DFDFDF',
      borderRadius: 10,
      marginLeft: 15,
      marginRight: 15,
    },
    popularSerachStyle:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      borderBottomWidth:1,
      borderBottomColor:'gray',
      paddingBottom: 15
    }
  });


export default class Search extends Component{


  render(){
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.searchStyle}>
        <TouchableOpacity style = {styles.searchIcon}>
          <Image source = {{uri:'https://www.iconsdb.com/icons/preview/gray/search-3-xl.png'}} style = {styles.searchIconImage}></Image>
        </TouchableOpacity>
        <TextInput style = {styles.inputStyle}
          placeholder = "Nhập Địa Điểm"/>
        <TouchableOpacity >
          <Image source = {{uri:'https://img.icons8.com/ios/2x/filter.png'}} style = {styles.filterIconImage}></Image>
        </TouchableOpacity>
        </View>

        <Text style = {{fontSize:25,fontWeight:'bold',color:'black',marginLeft:20,marginTop:20,marginBottom:10}}>Tìm Kiếm Hàng Đầu</Text>

        <View style = {styles.popularSerachStyle}>
          <Text style = {{fontSize:18,fontWeight:'bold',color:'black'}}> Lipstick & Perfume </Text>
          <Text style = {{fontSize:18}}> Nữ </Text>
          <TouchableOpacity style = {{marginLeft:'auto'}}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvesWi4SF1MHGmazBIuQTwUGwW9kBy1xLdrd-vBjfvwmjbQuw'}} style = {styles.filterIconImage}></Image>
          </TouchableOpacity>
        </View>

        <View style = {styles.popularSerachStyle}>
          <Text style = {{fontSize:18,fontWeight:'bold',color:'black'}}> Lipstick & Perfume </Text>
          <Text style = {{fontSize:18}}> Nữ </Text>
          <TouchableOpacity style = {{marginLeft:'auto'}}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvesWi4SF1MHGmazBIuQTwUGwW9kBy1xLdrd-vBjfvwmjbQuw'}} style = {styles.filterIconImage}></Image>
          </TouchableOpacity>
        </View>

        <View style = {styles.popularSerachStyle}>
          <Text style = {{fontSize:18,fontWeight:'bold',color:'black'}}> Lipstick & Perfume </Text>
          <Text style = {{fontSize:18}}> Nữ </Text>
          <TouchableOpacity style = {{marginLeft:'auto'}}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvesWi4SF1MHGmazBIuQTwUGwW9kBy1xLdrd-vBjfvwmjbQuw'}} style = {styles.filterIconImage}></Image>
          </TouchableOpacity>
        </View>

        <Text style = {{fontSize:25,fontWeight:'bold',color:'black',marginLeft:10,marginTop:30}}>Địa Điểm Nổi Tiếng</Text>


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

Search.navigationOptions = {
  tabBarIcon : ({focused}) => (
    <Icon
      name = "md-search"
      size = {30}
      color = {focused ? "blue" : "black"}
    />
  )
}
