import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
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
import Ayurveda from '../assets/Pictures/Ayurveda.png';

export default CategoryScreen = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
        <View style={styles.Header}>
                    <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'20%', paddingLeft:'5%'  }}>Categories</Text>
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#007279', '#fff' ]} style={styles.linearGradientBody}>
                    <View style={{ flexDirection: 'row', height:'20%',padding:10,paddingTop:15}}>  
              <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={Ayurveda} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlign:'right', marginLeft:'30%',justifyContent:'center',top:'-200%'}}> Ayurveda</Text>
              </View> 
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View >
              <Text style={{textAlignVertical: 'center', textAlign: 'center'}}> Medicines</Text>
              </View>
              </TouchableOpacity>
          </View>

              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View >
              <Text style={{ textAlignVertical: 'center', textAlign: 'center'}}> Homeopathy</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center' }}>Health Essentials</Text>
              </View>
              </TouchableOpacity>
              </View>
              
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View >
              <Text style={{ textAlignVertical: 'center', textAlign: 'center'}}>Covid Essentials</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center' }}>Sanitizers and Handwash</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center'}}>Women care</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center' }}>Immunity Booster</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center'}}> Everyday Needs</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center' }}>Others</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
                   
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.Tail}>
             
            <View style={styles.bottomNavi}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <IconI size={24} color="black" name="home-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WishlistScreen')}>
                    <IconF5 size={24} color="black" name="heart"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <IconI size={24} color="black" name="person-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
                    <IconM size={24} color="white" name="category" />
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
        borderTopLeftRadius:26
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
   },
   ayurveda:{
        marginLeft:'-40%',
        marginTop:'10%',
   },

})