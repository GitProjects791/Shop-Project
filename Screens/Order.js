import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Dimensions, Platform } from 'react-native'

import { TextInput } from 'react-native-paper'

import { useHeaderHeight } from '@react-navigation/elements';

const winDimensions = Dimensions.get('window')


function Order ({ navigation }) {
    useEffect(() => {
        navigation.getParent('Drawer').setOptions({ SwipeEnabled: false })
        
    }, [ navigation ])
    
    return (
        <View style={{ flexDirection:'column', flex: 1, borderWidth: 3, borderColor: 'black' }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[ styles.tContainer ,{ marginTop: winDimensions.height/2 - useHeaderHeight() - 2*winDimensions.height*1/18 } ]} >
                <TextInput style={ styles.tInput } placeholder='Hello'/>
                <TextInput style={ styles.tInput } placeholder='Hello'/>
            </KeyboardAvoidingView>
        </View>
    )
    
}

export default Order


const styles = StyleSheet.create({
    tContainer: {  
        flex:1/2,
        borderWidth: 3,
        borderColor: 'black',
       
        justifyContent: 'space-around',
    },

    tInput: {
        alignSelf: 'center',
        
        width: winDimensions.width* 3/4,
        height: winDimensions.height * 1/18,

        textAlign: 'center',


    }
})