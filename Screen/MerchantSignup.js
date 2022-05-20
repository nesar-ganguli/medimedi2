import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
// import CheckBox from '@react-native-community/checkbox';
const {width, height} = Dimensions.get('window');

export default CustomerSignUp = ({navigation}) =>  {
    const [Name,setName] = React.useState("");
    const [Email,setEmail] = React.useState("");
    const [License,setLicense] = React.useState("")
    const [Password,setPassword] = React.useState("");
    const [Aadhar,setAadhar] = React.useState("");
    const [Contact,setContact] = React.useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <LinearGradient colors={['#FFB6C1', '#FFFFFF' ]} style={styles.linearGradient}> 
        <SafeAreaView>
            <View style={styles.Text}>
            <Text style={styles.Meditext}>Medifind</Text>
            </View>
            <View style={styles.inputview}>
            <TextInput style={styles.textinput}
                backgroundColor='#D2F7FF'
                label="Name"
                value={Name}
                onChangeText={Name => setName(Name)}/>
             <TextInput
                backgroundColor='#F9E2E4'
                label="Email"
                value={Email}
                onChangeText={Email => setEmail(Email)}/>
             <TextInput
                backgroundColor='#D2F7FF'
                label="Password"
                value={Password}
                onChangeText={Password => setPassword(Password)}/>
            <TextInput 
                backgroundColor='#F9E2E4'
                label="License Number"
                value={License}
                onChangeText={License => setAadhar(License)}/>
             <TextInput 
                backgroundColor='#D2F7FF'
                label="Aadhar number"
                value={Aadhar}
                onChangeText={Aadhar => setAadhar(Aadhar)}/>
             <TextInput
                backgroundColor='#F9E2E4'
                label="Contact"
                value={Contact}
                onChangeText={Contact => setContact(Contact)}/>
            </View>
            <View style={styles.terms}>
            <Text>I agree with the terms and conditions</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('MerchantLogin')}>
            <View style={styles.SignupRect} >
                <Text style={{fontSize:19, color:'#FFFFFF'}}>SignUp</Text>
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
        justifyContent:'center',
        alignItems:'center',
        height:'30%',
        width:'100%',
        //backgroundColor: '#FFF'
    },

    Meditext:{
        fontSize:36,
    },

    inputview:{
        padding:5,
        flexDirection:'column',

    },

    textinput:{
        width: '90%',
        height: 70,
        borderRadius: 22,
        margin:5,
    },

    terms:{
        justifyContent:'center',
        alignItems:'center',
        height:30, 
    },

    SignupRect:{
        backgroundColor: "#476A7D",
        width: width/2.25,
        height: 50,
        borderRadius: 22,
        top:20,
        left:100,
        alignItems:'center',
        justifyContent:'center'
    },

})