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
                                <View style={styles.widgets.lContainer}>
                                    <Ionicons name = {element.icon} size={ 50 } color='black' style={styles.icon} />    
                                </View>

                                <View style={styles.widgets.rContainer}>
                                    <Text style={styles.widgets.text}>{element.name}</Text>
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

            flexDirection:'row',

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
            
            // borderWidth: 5,
            borderColor:'blue'
        },

        text: {
            fontWeight: '800',  // Bold, impactful font
            fontSize: 25,  // Larger size for prominence
            color: '#000',  // Strong black color for base
            textTransform: 'first-letter',  // All caps for added strength
            letterSpacing: '3',  // Spacious text for a refined look
            fontFamily: 'Poppins, sans-serif',  // Clean, modern sans-serif font
            alignSelf: 'center',  // Centered for balance
            
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
