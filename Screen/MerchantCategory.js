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
import Ayur from '../assets/Pictures/Ayur.png';
import medicine from '../assets/Pictures/medicine.png';
import homeopathy from '../assets/Pictures/homeopathy.png';
import healthessential from '../assets/Pictures/healthessential.png';
import covidessential from '../assets/Pictures/covidessential.png';
import sanitizer from '../assets/Pictures/sanitizer.png';
import womenscare from '../assets/Pictures/womenscare.png';
import immunitybooster from '../assets/Pictures/immunitybooster.png';
import everydayneeds from '../assets/Pictures/everydayneeds.png';
import others from '../assets/Pictures/others.png';

const {width, height} = Dimensions.get('window');
//const [alignItems, setAlignItems] = useState("stretch");
export default MerchantCategory = ({navigation}) =>  {
    return (
        <LinearGradient colors={['#FFC0CB', '#FFFFFF' ]} style={styles.linearGradient}>
            <SafeAreaView>
            <View style={styles.Header}>
                    <LinearGradient colors={['#EDA8AE', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'20%', paddingLeft:'5%'  }}>Category</Text>
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#EDA8AE', '#fff' ]} style={styles.linearGradientBody}>

                    <View style={{ flexDirection: 'row', height:'20%',padding:10,paddingTop:15}}>  
              <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={Ayur} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlign:'right', marginLeft:'20%',justifyContent:'center',top:'-130%'}}> Ayurveda</Text>
              </View> 
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={medicine} style={styles.ayurveda}/>
              </View>
              <View >
              <Text style={{textAlignVertical: 'center', textAlign: 'right',top:'-130%',marginLeft:'20%'}}> Medicines</Text>
              </View>
              </TouchableOpacity>
          </View>

              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
                  <View>
              <Image source={homeopathy} style={styles.ayurveda}/>
              </View>
              <View >
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-130%'}}> Homeopathy</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={healthessential} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'30%',top:'-130%' }}>Health Essentials</Text>
              </View>
              </TouchableOpacity>
              </View>
              
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={covidessential} style={styles.ayurveda}/>
              </View>
              <View >
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'30%',top:'-130%'}}>Covid Essentials</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={sanitizer} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-80%'}}>Sanitizers and Handwash</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
                  <View>
              <Image source={womenscare} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-130%'}}>Women care</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={immunitybooster} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'30%',top:'-130%'}}>Immunity Booster</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
                  <View>
              <Image source={everydayneeds} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'25%',top:'-130%'}}> Everyday Needs</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={others} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-130%'}}>Others</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
                   
                    </LinearGradient>
                </View>
            </View>
              <View style={styles.Tail}>
                <View style={styles.bottomNavi}>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
                      <IconI size={24} color="black" name="home-outline" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantOrders')}>
                      <IconO size={24} color="black" name="stack"  />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantCategory')}>
                      <IconM size={24} color="white" name="category" />
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
    linearGradientBody:{
        flex: 1,
        borderTopRightRadius:26,
        borderTopLeftRadius:26
    },
    linearGradient: {
        flex: 1,
    },
    Header: {
        width:'100%',
        height:'25%',
        // flex:1,
        // backgroundColor:'#010101'
    },
    HeaderFlex: {
        flex:1,
        flexDirection:'column',
        padding:'3%',
        
    },
    Body: {
        // flex:4,
        backgroundColor:'#fff',
        // padding:'3%',
        height:'65%',
        width:'100%',
        
        
    },
    BodyLayout: {
        
            // marginLeft:'10%',
            // marginRight:'10%',
            top:'-10%',
            // backgroundColor:'#00747BCF',
            height:'110%',
            width:'98%',
            borderTopLeftRadius:26,
            borderTopRightRadius:26,
            alignSelf:'center'
    
        },
    Tail: {
      height:'10%',
      width: '100%',
      backgroundColor:'#eee'
    },
    // loc: {
      
    // },
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
  ayurveda:{
    marginLeft:'-40%',
    marginTop:'10%',
},
        
  })


