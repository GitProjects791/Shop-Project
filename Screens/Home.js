import React from "react";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

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
    Platform,
    Linking
} 
from "react-native";

import { Shops } from '../Data';


function Home ( { navigation } ) {
    const bgImage = require('../assets/background.png');
    
    const call = function( number ) {
        const url = `tel:${number}`;
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    Alert.alert("Error", "Your device does not support this feature.");
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.error("An error occurred", err));
    }

    return (
        // <ImageBackground source={bgImage} style={ styles.bg }> 
            <ScrollView  style={styles.scroller} contentContainerStyle={styles.scrollContainer}>
                    {  
                        Shops.map(( element, index ) => {
                            return (
                            <Animatable.View key = {element.name} animation="fadeInUp" duration={500} delay={index*200}style={{flex:1}}>
                                <TouchableOpacity style={[styles.widgets.body, Platform.OS == 'ios'? styles.widgets.body.ios : styles.widgets.body.android]} onPress={() => navigation.navigate("Account", { purpose: 'signUp' })}>
                                    <View style={{ flex: 8/10, flexDirection: 'row'}}>
                                        <View style={styles.widgets.lContainer}>
                                            <Ionicons name = {element.icon} size={ 50 } color='black' style={styles.icon} />    
                                        </View>

                                        <View style={styles.widgets.rContainer}>
                                            <Text style={styles.widgets.text}>{element.name}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 2/10}}>
                                        <TouchableOpacity style={styles.widgets.body.bottom.menu} onPress={() => call( element.contactNumber )} > 
                                            <Text style={styles.widgets.body.bottom.menuText}>Call : { element.contactNumber }</Text>
                                        </TouchableOpacity>
                                    </View>

                                </TouchableOpacity>
                            </Animatable.View>
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
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
    },

    widgets: {
        body: {
            marginTop: 20,
            width: dimensions.width * 0.9,
            height: dimensions.height * 0.25,

            borderRadius: 10,

            backgroundColor: 'white',
            opacity: 1,

            flexDirection: 'column',

            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
                animation: 'fadeIn',
            },

            android: {
                elevation: 5,
            },

            bottom: {
                menu: {
                    flex: 1,
                    alignSelf:'center',
                    width: '80%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#5bf6dc',
                },

                menuText: {
                    alignSelf: 'center',
                    paddingTop: 15,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'Black',
                },
            },
        },

        lContainer: {
            flex: 1 / 3,
            justifyContent: 'center',
            alignItems: 'center',
        },

        rContainer: {
            flex: 2 / 3,
            justifyContent: 'center',
            borderColor: 'blue',
        },

        text: {
            fontWeight: '800',
            fontSize: 25,
            color: '#000',
            textTransform: 'first-letter',
            letterSpacing: '3',
            fontFamily: 'Poppins, sans-serif',
            alignSelf: 'center',
        },
    },

    scroller: {
        flex: 1,
    },

    scrollContainer: {
        alignItems: 'center',
        paddingBottom: 40,
    },
});
