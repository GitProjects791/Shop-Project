import {  useState, useEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Dimensions, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { TextInput } from 'react-native-paper'

import { signIn } from '../Data'

console.log(signIn)

const winDimensions = Dimensions.get('window')


function Login ({ navigation }) {
    useEffect(() => {
        navigation.getParent('Drawer').setOptions({ SwipeEnabled: false })
        
    }, [ navigation ])
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={ styles.tContainer } >
            <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                <View style={{ flex: 1, justifyContent: 'space-around'}}>
                    <TextInput mode='outlined' placeholder='Hello' style={ styles.tInput }  label="Email"  left={ <TextInput.Icon icon={ () => <Ionicons name='mail-outline' size={ 30 } /> } /> } />
                    <TextInput mode='outlined' placeholder='Hello' style={ styles.tInput }  label="Pasword" left={ <TextInput.Icon icon={ () => <Ionicons name='eye' size={ 30 } />} /> } /> 
                </View>
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