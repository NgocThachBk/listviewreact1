/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react'; import { ListView, Text, View, Image, StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 20,
   },
   img: {
     width: 193,
     height: 110,
   },
 });

 class ListViewDemo extends Component {
   constructor(props) {
     super(props);

     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

     this.state = {
       dataSource: ds.cloneWithRows(['row 1', 'row 2']),
     };
   }
   render() {
     const imageSource = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg';
     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={data => (
           <View style={styles.container}>
             <Image
               source={{ uri: imageSource }}
               style={styles.img}
             />
             <Text>{data}</Text>
           </View>)}
       />
     );
   }
 }


 export default ListViewDemo;
