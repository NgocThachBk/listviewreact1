import React, { Component } from 'react';
import { TextInput,AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';
import flatListData from '../data/flatListData';
import FlatListItem from '../component/ItemListMore';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterPlace from '../screen/FilterPlace';
import { TabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';


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
      marginTop: 15,
      borderBottomWidth:1,
      borderBottomColor:'gray',
      paddingBottom: 10
    }
  });


export default class Search extends Component<Props>{

  constructor(props) {
    super(props);
    this.state = {
      typedText:''
    };
  }

  render(){
    var listSearch = new Array();
    var textInputed = '';
    return (
      <View style = {{flex: 1 , marginTop: 22}} >
        <View style = {styles.searchStyle}>
        <TouchableOpacity  style = {styles.searchIcon} onPress = {() => {
          textInputed = this.state.typedText;
          if(textInputed != ''){
            for(var i = 0; i < flatListData.length;i++){
              if(flatListData[i].name.toLowerCase().indexOf(textInputed.toLowerCase()) != -1){
                listSearch.push(flatListData[i]);
              }
            }
            this.props.navigation.navigate('ShowBrand',{dataSend:listSearch,textSearch:textInputed});
          }
        }} >
          <Image source = {{uri:'https://www.iconsdb.com/icons/preview/gray/search-3-xl.png'}} style = {styles.searchIconImage}></Image>
        </TouchableOpacity>
        <TextInput style = {styles.inputStyle}
          placeholder = "Nhập Địa Điểm"
          onChangeText = {
            (text) => {
              this.setState(
                (previousState) => {
                  return {
                    typedText: text
                  };
                }
              );
            }
          }
          />
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Details')} >
          <Image source = {{uri:'https://img.icons8.com/ios/2x/filter.png'}} style = {styles.filterIconImage}></Image>
        </TouchableOpacity>
        </View>

        <Text style = {{fontFamily: "MontserratBlack",fontSize:22,fontWeight:'bold',color:'black',marginLeft:20,marginTop:20,marginBottom:10}}>Tìm Kiếm Hàng Đầu</Text>

        <View style = {styles.popularSerachStyle}>
          <Text style = {{fontFamily: "MontserratBlack",fontSize:15,fontWeight:'bold',color:'black'}}> Lipstick & Perfume </Text>
          <Text style = {{fontFamily: "MontserratBlack",fontSize:15}}> Nữ </Text>
          <TouchableOpacity style = {{marginLeft:'auto'}}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvesWi4SF1MHGmazBIuQTwUGwW9kBy1xLdrd-vBjfvwmjbQuw'}} style = {styles.filterIconImage}></Image>
          </TouchableOpacity>
        </View>

        <View style = {styles.popularSerachStyle}>
          <Text style = {{fontFamily: "MontserratBlack",fontSize:15,fontWeight:'bold',color:'black'}}> Lipstick & Perfume </Text>
          <Text style = {{fontFamily: "MontserratBlack",fontSize:15}}> Nữ </Text>
          <TouchableOpacity style = {{marginLeft:'auto'}}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvesWi4SF1MHGmazBIuQTwUGwW9kBy1xLdrd-vBjfvwmjbQuw'}} style = {styles.filterIconImage}></Image>
          </TouchableOpacity>
        </View>

        <View style = {styles.popularSerachStyle}>
          <Text style = {{fontFamily: "MontserratBlack",fontSize:15,fontWeight:'bold',color:'black'}}> Lipstick & Perfume </Text>
          <Text style = {{fontFamily: "MontserratBlack",fontSize:15}}> Nữ </Text>
          <TouchableOpacity style = {{marginLeft:'auto'}}>
            <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvesWi4SF1MHGmazBIuQTwUGwW9kBy1xLdrd-vBjfvwmjbQuw'}} style = {styles.filterIconImage}></Image>
          </TouchableOpacity>
        </View>

        <Text style = {{fontFamily: "MontserratBlack",fontSize:20,fontWeight:'bold',color:'black',marginLeft:10,marginTop:30}}>Địa Điểm Nổi Tiếng</Text>


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
