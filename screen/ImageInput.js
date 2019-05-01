import React, { Component } from 'react';
import { ScrollView,TextInput, AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import imageAdd from '../data/imageAdd';
import TextField from '../component/common/TextField/TextField';




const styles = StyleSheet.create({
  inputMargin : {
    marginTop: 30
  },
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
    height:280,
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
  },
  titleStyle:{
    fontFamily: "MontserratMedium",
    fontSize: 12,
    color: "#333",
    marginLeft: 36,
    width: "10%",
    borderBottomColor: "black",
    borderBottomWidth:1,
    marginTop: 30
  },
  inputMota: {
    width: "80%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 200,
    marginTop:30
  }
});





export default class ImagePickerProject extends React.Component {
  state = {
    text: ''
  };

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
        <ScrollView style = {{}}>
        <View >
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
          <View style = {styles.container}>
            <Text style = {styles.titleStyle} >Mô Tả</Text>

            <TextInput style = {styles.inputMota}/>
          </View>
        </View>
</ScrollView>
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
