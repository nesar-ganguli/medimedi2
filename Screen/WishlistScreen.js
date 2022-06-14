import * as React from 'react';
import { StyleSheet, View, Text, Image,FlatList } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Button, Searchbar } from 'react-native-paper';
import Image1 from '../assets/Pictures/image1.png'
import Cart from '../assets/Pictures/Cart.png'
import { ScrollView } from 'react-native';
import imageCovid from '../assets/Pictures/imageCovid.png';
import imageCritical from '../assets/Pictures/imageCritical.png';
import imageNeeds from '../assets/Pictures/imageNeeds.png';
import imageNearest from '../assets/Pictures/imageNearest.png';
import homeBtn from '../assets/Pictures/homeBtn.png';
import heartBtn from '../assets/Pictures/heartBtn.png';
import categoriesBtn from '../assets/Pictures/categoriesBtn.png';
import profileBtn from '../assets/Pictures/profileBtn.png';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';

import { useState,useEffect } from 'react';

export default WishlistScreen  = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [data, setData] = useState();

    const fetchData= async()=>{
        const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
        const users = await response.json();
        setData(users);
    
    }
    useEffect(() => {
        fetchData();
      });
    

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
                <View style={styles.Header}>
                    <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'20%', paddingLeft:'5%'  }}>Wishlist</Text>
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['rgba(0, 114, 121, 0.61)', '#fff' ]} style={styles.linearGradientBody}>
                        <FlatList
                            data={data}
                            keyExtractor={(item,index) => index.toString()}
                            renderItem={({item}) =>

                            <View style={{backgroundColor:'rgba(119, 180, 185, 0.8)',padding:5,marginBottom:3}}>
                                <View style={{flex:0.2,alignItems:'flex-end'}}>
                                    <TouchableOpacity>
                                        <IconI size={24} color="black" name="heart" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.8,flexDirection:'row'}}>
                                    <View style={{padding:5,flex:0.4}}>
                                    <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
                                    </View>
                                    <View style={{padding:5, flexDirection:'column',flex:0.7}}>
                                        <Text style={{color:'#fff', fontWeight:'bold',alignSelf:'stretch'}}>{item.name}</Text>
                                        <Text style={{color:'#fff',alignSelf:'stretch'}}>{item.email}</Text>
                                        <Text>City: {item.address.city}</Text>
                                    </View>
                                    <View style={{padding:5,flex:0.3, alignItems:'flex-end',justifyContent:'flex-end'}}>
                                    <View style={{ borderRadius:50,height:'50%', width:'80%', alignItems:'center',justifyContent:'center', borderWidth:1,borderColor:'black'}}>
                                        <Text style={{color:'rgba(0, 116, 123, 1)'}}>+ Add</Text>
                                    </View>
                                    </View>
                                </View>
                                
                                {/* <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
                                <Text style={{color:'#fff'}}>{item.email}</Text>
                                <Text>City: {item.address.city}</Text> */}
                                
                                </View>

                            }

                        />
                    </LinearGradient>
                </View>
            </View>
            {/* </View> */}
            <View style={styles.Tail}>
             
            <View style={styles.bottomNavi}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <IconI size={24} color="black" name="home-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WishlistScreen')}>
                    <IconF5 size={24} color="white" name="heart"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <IconI size={24} color="black" name="person-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
                    <IconM size={24} color="black" name="category" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    linearGradientBody:{
        flex: 1,
        borderTopRightRadius:26,
        borderTopLeftRadius:26,
        paddingTop:40
    },
    linearGradient: {
        flex: 1,
    },
    Main: {
        width:'100%',
        height:'93%',
        backgroundColor:'purple',
    },
    Header: {
        width:'100%',
        height:'25%',
        // flex:1,
        // backgroundColor:'#010101'
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
        height:'100%',
        width:'90%',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        alignSelf:'center'

    },
    Tail: {
        // flex:1,
        width:'100%',
        height:'10%',
        backgroundColor:'#fff'
    },
    Search: {
        marginTop:'2%',
    },
    image1: {
    flex: 1,
    height: null,
    width:'100%',
    resizeMode: 'contain',
    // flex: 1,
    // aspectRatio: .75, 
    // resizeMode: 'contain',
    
    },
    HeaderFlex: {
        flex:1,
        flexDirection:'column',
        padding:'3%',
        
    },
    box: {
        width: '33.33%',
        // height: '30%',
        padding: 5,
        
    },
    inner: {
        flex: 1,
        backgroundColor: '#fcfcfc',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:23,
    },
    NearestButton: {
        backgroundColor:'#F9A826',
        height:50,
        width: '97%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26,
        margin:5,
        shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    subBody: {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    bottomNavi: {
        backgroundColor:'#00747B',
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
   icon: {
       color:'black',
   }

})