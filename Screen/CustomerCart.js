import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF5 from 'react-native-vector-icons/FontAwesome5';

import Image1 from '../assets/Pictures/image1.png'
import { useState,useEffect } from 'react';


export default CustomerCart = ({navigation}) =>  {
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
                    <View style = {{flexDirection : "row", paddingTop : "10%",paddingLeft:"5%"}}>
                    
                        <View style={{flex : 0.1, top:"-1%"}}>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                                <Text style={styles.Back}> {'<'} </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex : 0.9}}>
                            <Text style={{fontSize:20
                                 , color:'black'}}>Cart</Text>
                            <Text style={{fontSize:15 , color:'black'}}>home, Bangalore, 560103</Text>
                        </View>
                
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

                            <View style={{backgroundColor:'rgba(243, 251, 255, 1)',padding:5,marginBottom:3}}>
                                <View style={{flex:0.2,alignItems:'flex-end'}}>
                                    <TouchableOpacity>
                                        <IconI size={24} color="black" name="heart" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.8,flexDirection:'row'}}>
                                    <View style={{padding:5,flex:0.4}}>
                                    <Text style={{color:'black', fontWeight:'bold'}}>{item.name}</Text>
                                    </View>
                                    <View style={{padding:5, flexDirection:'column',flex:0.7}}>
                                        <Text style={{color:'black', fontWeight:'bold',alignSelf:'stretch'}}>{item.name}</Text>
                                        <Text style={{color:'black',alignSelf:'stretch'}}>{item.email}</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('CustomerCart')}>
                    <View style={styles.TailChild}>
                        <Text style={{fontSize:18, color:"white", top:"-60%"}}>Place Order {'>'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    linearGradientBody:{
        flex: 1,
        //borderTopRightRadius:26,
        //borderTopLeftRadius:26
    },
    linearGradient: {
        flex: 1,
    },
    Back: {
        //top:'15%',
        //left : '5%',
        //padding:'15%',
        color:'black',
        fontSize: 25,
    },
    Main: {
        width:'100%',
        height:'93%',
        backgroundColor:'purple',
    },
    TailChild : {
        left:"60%",
        top:"24%",
        justifyContent : "center",
        alignItems:"center",
        width: "35%",
        paddingTop : "7%", 
        borderRadius : 5,
        // right : "5%",
        backgroundColor:"#02767d",
    },
    Header: {
        width:'100%',
        height:'20%',
        //flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
        // flex:1,
        // backgroundColor:'#010101'
    },
    Body: {
        // flex:4,
        backgroundColor:'#fff',
        // padding:'3%',
        height:'70%',
        width:'100%',
        //borderTopLeftRadius:26,
        //borderTopRightRadius:26,
        
    },
    HeaderBody:{
        flexDirection:'row',
        top: '4%',
        width:'100%',
        height:'100%',
    },
    BodyPadding:{
        padding:'5%',
    },
    BodyItemsPadding:{
        padding:'5%',
        //color : '#a9a9a9',
    },
    BodyLayout: {
        // marginLeft:'10%',
        // marginRight:'10%',
        //top:'-10%',
        // backgroundColor:'#00747BCF',
        height:'100%',
        width:'100%',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        alignSelf:'center'

    },
    Tail: {
        // flex:1,
        width:'100%',
        height:'10%',
        backgroundColor:'rgba(2, 118, 125, 0.35)'
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
        //flex:1,
        //backgroundColor: 'purple',
        width:'50%',
        height:'100%',
        //flexDirection:'column',
        //padding:'3%',
        //alignItems:'flex-start',
        //justifyContent:'center',
        //top:"-10%"
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
   },
   ImageView: {
    width:'30%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'#fff'
},
ImageView2: {
    width:'20%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor: 'orange',
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

})