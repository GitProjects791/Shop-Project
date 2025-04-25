import React from "react";
import { Ionicons } from '@expo/vector-icons';

import 
{ 
    Text,
    Button, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground,
    ScrollView,
    Dimensions,
    View,
    Platform
} 
from "react-native";

import { Shops } from '../Data';


function Home ( { navigation } ) {
    const bgImage = require('../assets/background.png');

    return (
        // <ImageBackground source={bgImage} style={ styles.bg }> 
            <ScrollView  style={styles.scroller} contentContainerStyle={styles.scrollContainer}>
                {  
                    Shops.map((element) => {
                        return(
                            <TouchableOpacity key={ element.name } style={[styles.widgets.body, Platform.OS == 'ios'? styles.widgets.body.ios : styles.widgets.body.android]} onPress={() => navigation.navigate("Account", { purpose: 'signUp' })}>
                                <View style={{ flex: 8/10, flexDirection: 'row'}}>
                                    <View style={styles.widgets.lContainer}>
                                        <Ionicons name = {element.icon} size={ 50 } color='black' style={styles.icon} />    
                                    </View>

                                    <View style={styles.widgets.rContainer}>
                                        <Text style={styles.widgets.text}>{element.name}</Text>
                                    </View>
                                </View>

                                <View style={{borderWidth: 3, borderColor: 'red', flex: 2/10}}>
                                    <TouchableOpacity style={{flex: 7/10, width:'60%', alignSelf: 'center', borderWidth: 3, borderColor:'blue', borderBottomLeftRadius: -5, borderBottomRightRadius: -5}} >

                                    </TouchableOpacity>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    }) 
                }       
            </ScrollView>
        // </ImageBackground>   
    );  
}

export default Home

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
    
    bg: {
        flex:1, 
        paddingTop:30,
        paddingBottom: 30
    },

    widgets: {
        body: {
            marginTop: 20,
            width: dimensions.width*0.9,
            height:dimensions.height*0.25,
           
            borderRadius: 10,
            
            backgroundColor:'white',
            opacity:1,

            flexDirection:'column',

            ios:{
                
                shadowColor:'#000', 
                shadowOffset: {width: 0, height: 5}, 
                shadowOpacity: 0.2, 
                shadowRadius: 5
            },
            
            android:{
                elevation: 5,
            },
        },
        
        lContainer: {
            flex: 1/3,
            // borderWidth:3,
            // borderColor:'red',

            justifyContent:'center',
            alignItems:'center',
        },

        rContainer:{
            flex:2/3,
            
            justifyContent:'center',
            
            borderColor:'blue'
        },

        text: {
            fontWeight: '800',
            fontSize: 25,
            color: '#000',
            textTransform: 'first-letter',
            letterSpacing: '3',
            fontFamily: 'Poppins, sans-serif',
            alignSelf: 'center',
        } 
    },

    scroller: {
        flex : 1, 
        // borderColor: 'black',
        // borderWidth: 3
    },
    
    scrollContainer: {
        alignItems:'center',
        paddingBottom: 40
        // borderColor: 'red',
        // borderWidth: 5
    }
})
