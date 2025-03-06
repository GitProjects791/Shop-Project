import {  useState, useEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Dimensions, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { TextInput } from 'react-native-paper'

import { Account } from '../Data'
import { useHeaderHeight } from '@react-navigation/elements'


const winDimensions = Dimensions.get('screen')

console.log(Dimensions.get('window').height)

function Login ({ route, navigation }) {
    
    const Data = Account[route.params.purpose]

    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={ styles.container } >
               
                    <View onLayout={ (event)=> {console.log(event.nativeEvent.layout.y)}} style={ [{ marginTop: (winDimensions.height - useHeaderHeight())/9  }, styles.tContainer]}>
                        {
                            Data.map((value) => {
                                return(
                                    <TextInput key={value.label} mode='outlined' placeholder={ value.placeholder } style={ styles.tInput }  label={ value.label }  left={ <TextInput.Icon icon={ () => <Ionicons name={ value.icon } size={ 30 } /> } /> } />
                                ) 
                            })
                        }
                    </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>           

    ) 

    
}

export default Login

const styles = StyleSheet.create({
    container: { 
        borderColor: 'black',
        borderWidth:3,
        flex:1,
        justifyContent:'space-around'
    },

    tContainer: {
        justifyContent: 'space-around',
        flex:1,
        height: winDimensions.height/2,
        borderWidth:3,
        borderColor: 'red'
    },  

    tInput: {
        alignSelf: 'center',
        
        width: winDimensions.width* 3/4,
        // marginTop: 300
    },
})