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
              <View style={styles.SubHeader}></View>
              <View style={styles.Body}></View>
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
      backgroundColor:'#fff'
    },
    Body: {
      height:'45%',
      width:'100%',
      backgroundColor:'#aaa'
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
        
  })


