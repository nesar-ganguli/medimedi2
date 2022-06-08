import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
import HomeScreen from './HomeScreen';

const {width, height} = Dimensions.get('window');

export default CustomerLogin = ({navigation, props}) =>  {
    const [Name,setName] = React.useState("");
    const [Password,setPassword] = React.useState("");
    const login = async (props) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:Name, Password:Password})
        };
        try {
            await fetch(
                'http://192.168.1.7:4545/customerLogin', requestOptions)
                .then(res => {
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log(data)
                            const response = data.Msg;
                            console.log(response);
                            if(response === "Not Authenticated"){
                                alert("Username or Password is Wrong. Try again.")
                                props.navigation.replace('HomeScreen');
                            }
                            else{
                                alert("Login Successfully!!");
                                
                            }
                        });
                })
                
        }
        catch (error) {
            console.error(error);
        }
    }
    const validateLogin = async (props) => {
        console.log("ergver");
        if(Name.length === 0){
            alert("Name can't be empty" );
        }else if(Password.length === 0){
            alert("Password can't be empty" );
        }else if(Password.length < 8){
            alert("Password must be 8 characters");
        }else{
            login(props)
        }
    }

    return (
      <LinearGradient colors={['#80F0FF', '#FFFFFF' ]} style={styles.linearGradient}>
          <SafeAreaView>
          <View style={styles.Medi}>
            <Text style={styles.Meditext}>Medifind</Text>
            </View>
            <View style={styles.Text}>
            <TextInput 
                backgroundColor='#D2F7FF'
                label="Name"
                value={Name}
                onChangeText={Name => setName(Name)}/>
            </View>
            <View style={styles.Text} >
            <TextInput 
                backgroundColor='#F9E2E4'
                label="Password"
                value={Password}
                onChangeText={Password => setPassword(Password)}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            {/* <TouchableOpacity onPress={() => validateLogin(props)}> */}
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