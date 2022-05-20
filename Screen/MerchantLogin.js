import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";

const {width, height} = Dimensions.get('window');

export default CustomerLogin = ({navigation}) =>  {
    const [Email,setEmail] = React.useState("");
    const [Password,setPassword] = React.useState("");
    return (
      <LinearGradient colors={['#FFB6C1', '#FFFFFF' ]} style={styles.linearGradient}>
          <SafeAreaView>
          <View style={styles.Medi}>
            <Text style={styles.Meditext}>Medifind</Text>
            </View>
            <View style={styles.Text}>
            <TextInput style={styles.TextInput}
                backgroundColor='#D2F7FF'
                label="Email"
                value={Email}
                onChangeText={Email => setEmail(Email)}/>
            </View>
            <View style={styles.Text} >
            <TextInput style={styles.TextInput}
                backgroundColor='#F9E2E4'
                label="Password"
                value={Password}
                onChangeText={Password => setPassword(Password)}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
            <View style={styles.Login} >
                <Text style={{fontSize:19, color:'#FFFFFF'}}>Login</Text>
            </View>
            </TouchableOpacity>
          </SafeAreaView>
      </LinearGradient>
    )
  }

  const styles =StyleSheet.create({
    linearGradient:{
        flex: 1,

    },

    Text:{
        padding:5,
        flexDirection:'column',
        align:'center',
        justifyContent:'center',
        top:200
    },

    TextInput:{
        width: '100%',
        height: 70,
        borderRadius: 75,
        margin:5,
       
        
    },

    Login:{
        backgroundColor: "#476A7D",
        width: width/2.25,
        height: 50,
        borderRadius: 22,
        top:300,
        left:100,
        alignItems:'center',
        justifyContent:'center'
    },

    Meditext:{
        fontSize:36,
        alignItems:'center',
        justifyContent:'center'
    },

    Medi:{
        zIndex:2,
        alignItems:"center",
        top:height/5,
    },
  })