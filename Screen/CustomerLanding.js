import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';


const {width, height} = Dimensions.get('window');

export default CustomerLanding = ({navigation}) =>  {
    return (
        // <View style={styles.container}>
        <LinearGradient colors={['#80F0FF', '#FFFFFF' ]} style={styles.linearGradient}> 
            <SafeAreaView>
                <View style={styles.TextView}>
                    <Text style={styles.Text}>medifind.</Text>  
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CustomerLogin')}>
                <View style={styles.LoginRect} >
                    <Text style={{fontSize:19, color:'#FFFFFF'}}>Login</Text>
                </View>
                </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CustomerSignUp')}>
                    <View style={styles.SignupRect} >
                        <Text style={{fontSize:19, color:'#FFFFFF'}}>SignUp</Text>
                    </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('MerchantLogin')}>
                < Text style={{fontSize:18, top:height/2, left:width/2.7,}}>Are you a seller? </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MerchantSignup')}>
                  <Text style={{fontSize:18, top:height/2, left:width/2.85, padding:15}}>Register Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
        // </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    TextView: {
        alignItems:"center",
        top:height/5,
      //   fontFamily: 'Montserrat',
        zIndex:2,
        elevation: (Platform.OS === 'android') ? 50 : 0,
    },
    Text: {
        fontSize:36,
      },
      LoginRect: {
        backgroundColor: "#FF8C8C",
        width: width/2.25,
        height: 40,
        borderRadius: 22,
        top:height/3,
        left:width/3.5,
        alignItems:'center',
        justifyContent:'center'
      },
      SignupRect: {
        backgroundColor: "#00CCF9",
        width: width/2.25,
        height: 40,
        borderRadius: 22,
        top:height/2.75,
        left:width/3.5,
        alignItems:'center',
        justifyContent:'center'
      },
      Touch: {
        zIndex:2,
        elevation: (Platform.OS === 'android') ? 50 : 0,
      },
})
