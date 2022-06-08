import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconO from 'react-native-vector-icons/Octicons';

const {width, height} = Dimensions.get('window');
//const [alignItems, setAlignItems] = useState("stretch");
export default MerchantDashboard = ({navigation}) =>  {
    return (
        <LinearGradient colors={['#FFC0CB', '#FFFFFF' ]} style={styles.linearGradient}>
            <SafeAreaView>
              <View style={styles.Header}>
                <View style={styles.loc}>
                <IconE size={36}  name="location-pin" />
                <Text style={{fontSize:16}}>Hebbal</Text>
                </View>
              </View>
              <View style={styles.SubHeader}>
                <View style={styles.SH}>
              {/* <Text style={{ backgroundColor: 'red', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 1</Text> */}
              <View style={{backgroundColor:'white', width:'100%', height:'33.33%',  borderRadius:12,padding:5}}>

              </View>
              <View style={{backgroundColor:'red', width:'100%', height:'33.33%',borderRadius:12,padding:5}}>

              </View>
              <View style={{backgroundColor:'blue', width:'100%', height:'33.33%',borderRadius:12,padding:5}}>

              </View>
              </View>
              </View>
              <View style={styles.Body}>
              <View style={{ flex: 1, flexDirection: 'row', height:'50%',padding:10}}>
              <View style={{backgroundColor:'green', height:'100%',width:'50%', borderRadius:12,marginRight:5}}>
              {/* <Text style={{ backgroundColor:'green',flex: 1, textAlignVertical: 'center', textAlign: 'center'}}> Total Sales</Text> */}
              </View>
              <View style={{height:'100%',width:'50%', borderRadius:12}}>
              <Text style={{ backgroundColor: 'pink', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> No of Orders</Text>
              </View>
          </View>

              <View style={{ flex: 1, flexDirection: 'row',height:'50%',padding:7,marginTop:3.5}}>
              <View style={{ height:'100%',width:'50%', borderRadius:12,marginRight:3.5}}>
              <Text style={{ backgroundColor:'yellow',flex: 1, textAlignVertical: 'center', textAlign: 'center'}}> Add offers</Text>
              </View>
              <View style={{height:'100%',width:'50%', borderRadius:12}}>
              <Text style={{ backgroundColor: 'lightblue', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}></Text>
              </View>
              
          </View>
              </View>
              <View style={styles.Tail}>
                <View style={styles.bottomNavi}>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
                      <IconI size={24} color="white" name="home-outline" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantOrders')}>
                      <IconO size={24} color="black" name="stack"  />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantCategory')}>
                      <IconM size={24} color="black" name="category" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantProfile')}>
                      <IconI size={24} color="black" name="person-outline" />
                  </TouchableOpacity>
                  </View>
              </View>
              
            </SafeAreaView>
      </LinearGradient>
    )
  }
  
  const styles =StyleSheet.create({
    linearGradient:{    
        flex: 1,
          },
    Header: {
      height:'15%',
      width:'100%',
      flexDirection:'row',
      alignItems:'flex-end',
      padding:'2%',
      // backgroundColor:'#eee'
    },
    SubHeader: {
      height:'30%',
      width: '100%',
      backgroundColor:'#ff6c6c',
      padding:7,
      
      // alignItems:'center',
      // justifyContent:'center'
    },
    Body: {
      height:'45%',
      width:'100%',
      backgroundColor:'#eee'
    },
    Tail: {
      height:'10%',
      width: '100%',
      backgroundColor:'#eee'
    },
     loc: {
        flexDirection:'row',
        alignItems:'flex-end',

     },
    bottomNavi: {
      backgroundColor:'#D35E5E',
      height:50,
      width: '97%',
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:26,
      margin:5,
      // padding:10,
      top:5,
      flexDirection:'row',

  },

  SH:{
    flexDirection:'column',
    flexWrap:'wrap',
    alignItems:'center',
  },
        
  })


