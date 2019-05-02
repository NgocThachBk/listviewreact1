import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import flatListData from '../data/flatListData';
import FlatListItem from '../component/ItemList';
import Icon from 'react-native-vector-icons/AntDesign';
import { TabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';


// class FlatListItem extends Component{
//   render(){
//     return (
//       <View style = {styles.itemList}>
//       <View style = {styles.shadowImage}>
//         <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
//       </View>
//       <View style = {{flex:1,flexDirection: 'column'}}>
//         <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
//         <Text style = {styles.brandStyle}>{this.props.item.numberBrand}</Text>
//       </View>
//       </View>
//     );
//     }
//   }


  const styles = StyleSheet.create({
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
    var dataShow ;
    var textSearch = "Thương Hiệu nổi tiếng";
    var dataReceive = this.props.navigation.getParam('dataSend', "");
    if(dataReceive != ""){
      dataShow = dataReceive;
      textSearch = this.props.navigation.getParam('textSearch', "");
    }
    else{
      dataShow = flatListData;
    }
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.headerStyle}>
          <Text style = {styles.headerText}>{textSearch}</Text>
          <TouchableOpacity style = {styles.headerIcon} onPress = {() => this.props.navigation.goBack(null)}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK_z4_pdETl1TTOl6Jy1pmtZnegrVIeFMXH5JZNWb_eQm-mo5'}} style = {styles.closeIcon}></Image>
          </TouchableOpacity>
        </View>
        <Text style = {styles.lineStyle}></Text>
        <FlatList style = {styles.listStyle}
        data = {dataShow}
        renderItem = {({item,index}) => {
          return(

            <FlatListItem item = {item} index= {index} navigation={this.props.navigation}></FlatListItem>

          );
        }}>
        </FlatList>
      </View>
    );
  }
}
BasicListItem.navigationOptions = {
  tabBarIcon : ({focused}) => (
    <Icon
      name = "home"
      size = {25}
      color = {focused ? "blue" : "black"}
    />
  )
}
