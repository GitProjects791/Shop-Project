import React from "react";

import 
{ 
    Text,
    Button, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground,
    ScrollView,
    Dimensions
} 
from "react-native";

import { Shops } from '../Data';


function Home ( { navigation } ) {
    const bgImage = require('../assets/background.png');

    return (
        <ImageBackground source={bgImage} style={ styles.bg }> 
            <ScrollView  contentContainerStyle={{ alignItems:'center' }}>
                {  
                    Shops.map((element) => {
                        return(
                            <TouchableOpacity key={ element.name } style={styles.widgets.body}onPress={() => navigation.navigate("Account", { purpose: 'signIn' })}>
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
            marginTop: 20,
            backgroundColor: "#f6eeee",
            width: dimensions.width*0.4,
            height:dimensions.height*0.2,
           
             
            borderRadius: 10,

            
            alignItems: 'center',
            justifyContent:'space-evenly',
        },
        
        text: {
            fontWeight:'bold',
        }
    }
})
