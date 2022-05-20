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

export default HomeScreen = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            <View style={styles.Header}>
                <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                <View style={styles.HeaderFlex}>
                    <Image source={Cart} style={{alignItems:'flex-end'}}/>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}   
                        style= {styles.Search}    
                    />
                </View>
                </LinearGradient>
            </View>
            <View style={styles.ImageView}>
            <Image source={Image1} style={styles.image1} />
            </View>
            <ScrollView>
            <View style={styles.Body}>
                {/* <View>
                <ScrollView horizontal={true}> */}
                <View style={styles.box}>
                    {/* <View style={styles.inner}>
                    </View> */}
                    <TouchableOpacity>
                        <Image source={imageCovid}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    {/* <View style={styles.inner}> */}  
                    {/* </View> */}
                    <TouchableOpacity>
                        <Image source={imageCritical}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.box}>
                    {/* <View style={styles.inner}> */}  
                    {/* </View> */}
                    <TouchableOpacity>
                        <Image source={imageNeeds}/>
                    </TouchableOpacity>
                </View>
                {/* </ScrollView>
                </View> */}
                <Image source={imageNearest} />
            </View>
                </ScrollView>
            {/* <View style={styles.Tail}>
            <Text> mc</Text>
            </View> */}
        </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    linearGradient:{
        flex: 1,
    },
    Header: {
        width:'100%',
        height:'15%',
        // flex:1,
        // backgroundColor:'#010101'
    },
    ImageView: {
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    Body: {
        // flex:4,
        width:'100%',
        height:'55%',
        backgroundColor:'#eee',
        padding:'3%',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
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
        height: '50%',
        padding: 5,
        
    },
    inner: {
        flex: 1,
        backgroundColor: '#fcfcfc',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:23,
    }

})