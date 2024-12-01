import {  useState, useEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Dimensions, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import LoginInputs from '../components/LoginInputs'


const winDimensions = Dimensions.get('window')


function Login ({ navigation }) {
    useEffect(() => {
        navigation.getParent('Drawer').setOptions({ SwipeEnabled: false })
        
    }, [ navigation ])
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={ styles.tContainer } >
            <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                <LoginInputs purpose={ navigation.route.params.purpose } />
            </TouchableWithoutFeedback>          
        </KeyboardAvoidingView>
    ) 

    
}

export default Login

const styles = StyleSheet.create({
    tContainer: { 
        borderColor: 'black',
        borderWidth:3,
        flex:1,
        justifyContent: 'space-around'
    },

    tInput: {
        alignSelf: 'center',
        
        width: winDimensions.width* 3/4,
        // height: winDimensions.height * 1/18
    },

    input: { borderColor: "gray", width: "100%", borderWidth: 1, borderRadius: 10, padding: 10, }
})