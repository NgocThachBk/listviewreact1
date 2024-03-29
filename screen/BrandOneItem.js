import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../component/ItemListMore';
import { TabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';


// class FlatListItem extends Component{
//   render(){
//     var detail = this.props.item.detail;
//
//     if(detail.length > 50) {
//       detail = detail.substr(0,50);
//       detail = detail + "...";
//     }
//
//     var address = this.props.item.address;
//
//     if(address.length > 30) {
//       address = address.substr(0,30);
//       address = address + "...";
//     }
//
//     return (
//       <View style = {styles.itemList}>
//       <View style = {styles.shadowImage}>
//         <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
//       </View>
//       <View style = {{flex:1,flexDirection: 'column'}}>
//         <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
//         <Text style = {styles.brandStyle}>{address}</Text>
//         <Text style = {styles.detailStyle}>{detail}</Text>
//       </View>
//       </View>
//     );
//     }
//   }


  const styles = StyleSheet.create({
    imageStyleHeader:{
      width: 50,
      height: 50,
      borderRadius: 5,
    },
    shadowImageHeader:{
      width: 50,
      height: 50,
      borderRadius: 5,
      marginLeft: 10,
      marginBottom: 10,
      elevation: 5
    },
    headerStyle:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "MontserratBlack"
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


export default class BrandOneItem extends Component{



  render(){
    var urlImageTitle = 'https://i2.wp.com/www.vietcv.net/wp-content/uploads/2018/04/Phuc-long.png?resize=945%2C675';
    var namePlace = "xxx";
    var dataShow ;
    var dataReceive = this.props.navigation.getParam('dataSend', "");
    if(dataReceive != ""){
      dataShow = dataReceive;
      namePlace = this.props.navigation.getParam('namePlace', "");
      urlImageTitle = this.props.navigation.getParam('urlImage', "");
    }
    else{
      dataShow = branditem;
    }
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.headerStyle}>
          <View style = {styles.shadowImageHeader}>
            <Image source = {{uri: urlImageTitle}} style = {styles.imageStyleHeader}></Image>
          </View>
          <Text style = {styles.headerText}>{namePlace}</Text>
          <TouchableOpacity style = {styles.headerIcon} onPress = {() => this.props.navigation.goBack(null)}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK_z4_pdETl1TTOl6Jy1pmtZnegrVIeFMXH5JZNWb_eQm-mo5'}} style = {styles.closeIcon}></Image>
          </TouchableOpacity>
        </View>
        <Text style = {styles.lineStyle}></Text>
        <FlatList style = {styles.listStyle}
        data = {dataShow}
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


BrandOneItem.navigationOptions = {
  tabBarIcon : ({focused}) => (
    <Icon
      name = "user-o"
      size = {25}
      color = {focused ? "blue" : "black"}
    />
  )
}
