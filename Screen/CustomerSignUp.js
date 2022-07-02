import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
// import CheckBox from '@react-native-community/checkbox';
import ipCon from'../ipConfig.json';
const {width, height} = Dimensions.get('window');

export default CustomerSignUp = ({navigation, props}) =>  {
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [Aadhar,setAadhar] = useState("");
    const [Contact,setContact] = useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false);


    const signup = async (props) => {
        console.log(Name)
        console.log(Email)
        console.log(Password)
        console.log(Aadhar)
        console.log(Contact)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:Name, Email:Email, Password:Password, Aadhar:Aadhar, Contact:Contact })
        };
        try {
            await fetch(ipCon.ip+'/customerSignup', requestOptions)
                .then(res => {
                    // Alert.alert("Registered")
                    // console.log(response.json())
                    // console.log(res.json)
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log(data)
                            const response = data.Msg;
                            console.log(response);
                            if(response === "Not Created"){
                                alert("Username exists, try another Username")
                            }
                            else{
                                alert("Registered Successfully!!");
                                navigation.push('CustomerLogin');
                            }
                        });
                })
        }
        catch (error) {
            console.error(error);
        }
    }
    
    const validate = async (props) => {
        console.log("ergver");
        if(Name.length === 0){
            console.log("empty");
            alert("Name can't be empty" );
        }else if(Email.length === 0){
            alert("Email can't be empty" );
        }else if(Password.length === 0){
            alert("Password can't be empty" );
        }else if(Aadhar.length === 0){
            alert("Aadhar can't be empty" );
        }else if(Contact.length === 0){
            alert("Contact can't be empty" );
        }else if(Password.length < 8){
            alert("Password must be 8 characters");
        }else if(Aadhar.length !== 12){
            alert("Invalid Aadhar Number. Provide 12 digits" );
        }
        // }else if(Aadhar.isInteger()){
        //     alert("nvalid Aadhar Number. Provide 12 digits" );
        // }
        else if(Contact.length !== 10){
            alert("Invalid Contact Number. Provide 10 digits" );
        }else{
            signup(props)
        }
    }

    

    return (
        <LinearGradient colors={['#80F0FF', '#FFFFFF' ]} style={styles.linearGradient}> 
        <SafeAreaView>
            <View style={styles.Text}>
            <Text style={styles.Meditext}>Medifind</Text>
            </View>
            <View style={styles.inputview}>
            <TextInput //style={styles.textinput}
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
                label="Aadhar number"
                value={Aadhar}
                onChangeText={Aadhar => setAadhar(Aadhar)}/>
             <TextInput
                backgroundColor='#D2F7FF'
                label="Contact"
                value={Contact}
                onChangeText={Contact => setContact(Contact)}/>
            </View>
            <View style={styles.terms}>
            <Text>I agree with the terms and conditions</Text>
            </View>
            <TouchableOpacity onPress={() => validate(props)}>
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
        height:'35%',
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
        width: '100%',
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