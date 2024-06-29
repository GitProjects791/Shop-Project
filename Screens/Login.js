import { ReactNode, useState, useEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Dimensions, Platform } from 'react-native'

import { TextInput } from 'react-native-paper'

import { useHeaderHeight } from '@react-navigation/elements';

const winDimensions = Dimensions.get('window')


function logIn ({ navigation }) {
    useEffect(() => {
        navigation.getParent('Drawer').setOptions({ SwipeEnabled: false })
        
    }, [ navigation ])
    
    return (
        <View style={{ flexDirection:'column', flex: 1, borderTopWidth: 2 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[ styles.tContainer ,{ marginTop: winDimensions.height/2 - useHeaderHeight() - 2*winDimensions.height*1/18 } ]} >
                <TextInput style={ styles.tInput } placeholder='Hello' label="hello" right={ <TextInput.Icon icon='eye' /> } />
                <TextInput style={ styles.tInput } placeholder='Hello' label="hello" right={ <TextInput.Icon icon='eye' /> } />            
            </KeyboardAvoidingView>
        </View>
    ) 

    
}

export default logIn

const styles = StyleSheet.create({
    tContainer: {  
        flex:1/2,

        justifyContent: 'space-around',
    },

    tInput: {
        alignSelf: 'center',
        
        width: winDimensions.width* 3/4,
        height: winDimensions.height * 1/18
    }
})