import React from "react";

import 
{ 
    Text,
    Button, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground,
    ScrollView,
    Dimensions,
    View
} 
from "react-native";

import { Shops } from '../Data';


function Home ( { navigation } ) {
    const bgImage = require('../assets/background.png');

    return (
        <ImageBackground source={bgImage} style={ styles.bg }> 
            <ScrollView  style={styles.scroller} contentContainerStyle={styles.scrollContainer}>
                {  
                    Shops.map((element) => {
                        return(
                            <TouchableOpacity key={ element.name } style={styles.widgets.body} onPress={() => navigation.navigate("Account", { purpose: 'signUp' })}>
                                <Text style={ styles.widgets.text }>{ element.name }</Text>
                                <Text style={ styles.widgets.text }>{ element.type }</Text>
                                <Button title="Detes" color="#841584"  />
                            </TouchableOpacity>
                        )
                    }) 
                }       
            </ScrollView>
        </ImageBackground>  
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
            flex: 1/7,
            marginTop: 20,
            backgroundColor: "#f6eeee",
            width: dimensions.width*0.9,
            // height:dimensions.height*0.2,
           
             
            borderRadius: 10,

            
            alignItems: 'center',
            justifyContent:'space-evenly',
        },
        
        text: {
            fontWeight:'bold',
        }
    },

    scroller: {
        flex : 1, 
        borderColor: 'black',
        borderWidth: 3
    },
    
    scrollContainer: {
        flex: 1,
        alignItems:'center',
        borderColor: 'red',
        boderWidth: 5
    }
})
