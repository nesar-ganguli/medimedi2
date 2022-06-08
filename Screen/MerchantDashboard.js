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
                <IconE size={30}  name="location-pin" />
                <Text style={{fontSize:16}}>Hebbal</Text>
                </View>
              </View>
              <View style={styles.SubHeader}>
                <View style={styles.SH}>
              {/* <Text style={{ backgroundColor: 'red', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 1</Text> */}
              <TouchableOpacity style={{backgroundColor:'white', width:'100%', height:'30.33%',  borderRadius:12,marginBottom:5}}>
             
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#49A8FF', width:'100%', height:'30.33%',borderRadius:12,marginBottom:5}}>
             
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'blue', width:'100%', height:'30.33%',borderRadius:12,marginBottom:5}}>
            
              </TouchableOpacity>
              </View>
              </View>
              <View style={styles.Body}>
              <View style={{ flexDirection: 'row', height:'50%',padding:10,paddingTop:15}}>
              <View style={{backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              {/* <Text style={{ backgroundColor:'green',flex: 1, textAlignVertical: 'center', textAlign: 'center'}}> Total Sales</Text> */}
              </View>
              <View style={{backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              {/* <Text style={{ backgroundColor:'green',flex: 1, textAlignVertical: 'center', textAlign: 'center'}}> Total Sales</Text> */}
              </View>
          </View>

              <View style={{flexDirection: 'row',height:'50%',padding:10}}>
              <View style={{ backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              {/* <Text style={{ flex: 1, textAlignVertical: 'center', textAlign: 'center'}}> Add offers</Text> */}
              </View>
              <View style={{backgroundColor: 'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              {/* <Text style={{  flex: 1, textAlignVertical: 'center', textAlign: 'center' }}></Text> */}
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
      width: '94%',
      backgroundColor:'rgba(255, 108, 108, 0.2)',
      borderRadius:18,
      padding:5,
      alignSelf:'center',
      marginLeft:3
      
      // padding:7,
      
      // alignItems:'center',
      // justifyContent:'center'
    },
    Body: {
      height:'45%',
      width:'97%',
      // backgroundColor:""
      alignSelf:'center',
      
    },
    Tail: {
      height:'10%',
      width: '100%',
      // backgroundColor:'#eee'
    },
     loc: {
        flexDirection:'row',
        alignItems:'flex-end',
        marginLeft:5,

     },
    bottomNavi: {
      backgroundColor:'#D35E5E',
      height:50,
      width: '94%',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:26,
      margin:5,
      marginLeft:6,
      // padding:10,
      top:5,
      flexDirection:'row',

  },
  SH:{
    justifyContent:'space-evenly',
    flexDirection:'column',
    padding:10,
    
    // paddingBottom:5    
  },
        
  })


